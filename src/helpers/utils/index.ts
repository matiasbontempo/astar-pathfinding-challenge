import { CellType } from '../../types';

// eslint-disable-next-line arrow-body-style
export const checkIfCellsAreEqual = (cell1: CellType, cell2: CellType): boolean => {
  return cell1[0] === cell2[0] && cell1[1] === cell2[1];
};
