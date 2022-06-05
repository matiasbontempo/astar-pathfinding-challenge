export type CellType = [number, number];

export type MazeType = number[][];

export interface NodeType {
  cell: CellType;
  neighbors: Array<CellType>;
}
