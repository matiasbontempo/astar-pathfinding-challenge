import { CellType, MazeType } from '../../types';

export interface PropsType {
  maze: MazeType,
  start: CellType,
  end: CellType,
  path: Array<CellType> | undefined,
  onTileClick: (cell: CellType) => void,
}
