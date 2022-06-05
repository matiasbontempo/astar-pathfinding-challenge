import React, { useEffect, useState } from 'react';

import Maze from '../Maze';

import { solver } from '../../helpers/maze-solver';

import { CellType, MazeType } from '../../types';

import { Container, Title, Paragraph } from './styles';

const testMaze: MazeType = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mazeStart: CellType = [1, 0];
const mazeEnd: CellType = [11, 10];

const App = () => {
  const [maze, setMaze] = useState<MazeType>(testMaze);
  const [solution, setSolution] = useState<Array<CellType> | undefined>(undefined);

  useEffect(() => {
    const s = solver(testMaze, mazeStart, mazeEnd);
    setSolution(s);
  }, [maze]);

  const handleTileClick = (cell: CellType) => {
    const newMaze = [...maze];
    const currentCell = newMaze[cell[1]][cell[0]];

    newMaze[cell[1]][cell[0]] = (currentCell + 1) % 2;
    setMaze(newMaze);
    setSolution(undefined);
  };

  return (
    <Container>
      <Title>A* Pathfinding</Title>
      <Paragraph>
        Quick implementation of the A* pathfinding algorithm. Click on the maze to toggle walls.
      </Paragraph>
      <Maze
        maze={testMaze}
        start={mazeStart}
        end={mazeEnd}
        path={solution}
        onTileClick={handleTileClick}
      />
    </Container>
  );
};

export default App;
