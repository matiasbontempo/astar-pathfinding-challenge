import type { MazeType, CellType } from '../../types';

interface NodeType {
  key: string;
  cell: CellType;
  distance: number;
  from: NodeType | undefined;
  visited: boolean;
  heuristic: number;
  score: number;
}

const distanceBetweenNodes = (nodeA: CellType, nodeB: CellType): number => {
  const xDistance = Math.abs(nodeA[0] - nodeB[0]);
  const yDistance = Math.abs(nodeA[1] - nodeB[1]);
  return xDistance + yDistance;
};

const getNeighbors = (maze: MazeType, [x, y]: CellType) => {
  const neighbors: Array<CellType> = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  directions.forEach(([dx, dy]) => {
    const [nx, ny] = [x + dx, y + dy];
    try {
      if (maze[ny][nx] === 0) {
        neighbors.push([nx, ny]);
      }
    } catch (e) {
      // this is expected to fail if the neighbor is out of bounds
    }
  });
  return neighbors;
};

export const solver = (
  maze: MazeType,
  start: CellType,
  end: CellType,
): Array<CellType> | undefined => {
  const nodes: Record<string, NodeType> = {};
  const queue: Array<NodeType> = [];

  const startNode: NodeType = {
    key: `${start[0]}-${start[1]}`,
    cell: start,
    distance: 0, // gScore
    from: undefined,
    visited: false,
    heuristic: distanceBetweenNodes(start, end), // hScore
    score: distanceBetweenNodes(start, end), // fScore
  };

  nodes[startNode.key] = startNode;
  queue.push(startNode);

  while (queue.length) {
    // find closest node in queue and remove it
    // eslint-disable-next-line max-len
    const node = queue.reduce((prev, curr) => (curr.score < prev.score ? curr : prev), queue[0]);
    queue.splice(queue.indexOf(node), 1);

    if (node.cell[0] === end[0] && node.cell[1] === end[1]) {
      // Solution found
      // Create path and return it
      const path: Array<CellType> = [];
      let currentNode: NodeType | undefined = node;
      while (currentNode) {
        path.push(currentNode.cell);
        currentNode = currentNode.from;
      }
      return path.reverse();
    }

    if (node.visited) continue; // eslint-disable-line no-continue
    node.visited = true;

    const neighbors = getNeighbors(maze, node.cell);

    neighbors.forEach((neightborCell) => {
      const neighborKey = `${neightborCell[0]}-${neightborCell[1]}`;
      let neightborNode: NodeType;

      if (nodes[neighborKey]) {
        // Evaluate node
        neightborNode = nodes[neighborKey];

        if (neightborNode.visited) return;

        const tentativeDistance = node.distance + 1;
        if (tentativeDistance >= neightborNode.distance) return;

        neightborNode.distance = tentativeDistance;
        neightborNode.from = node;
      } else {
        // Create new node
        neightborNode = {
          key: neighborKey,
          cell: neightborCell,
          distance: node.distance + 1,
          from: node,
          visited: false,
          heuristic: distanceBetweenNodes(neightborCell, end),
          score: 0,
        };
        neightborNode.score = neightborNode.distance + neightborNode.heuristic;
        nodes[neighborKey] = neightborNode;
      }

      queue.push(neightborNode);
    });
  }

  return undefined;
};
