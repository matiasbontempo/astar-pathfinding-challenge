import React from 'react';

import { checkIfCellsAreEqual } from '../../helpers/utils';

import Tile from '../Tile';

import { Container, Row } from './styles';
import { PropsType } from './types';

const Maze = ({
  maze, start, end, path, onTileClick,
}: PropsType) => (
  <Container>
    { maze.map((row, y) => (
      <Row>
        { row.map((cell, x) => (
          <Tile
            wall={!!cell}
            start={checkIfCellsAreEqual([x, y], start)}
            end={checkIfCellsAreEqual([x, y], end)}
            path={path && path.some((p) => checkIfCellsAreEqual(p, [x, y]))}
            onClick={() => onTileClick([x, y])}
          />
        )) }
      </Row>
    )) }
  </Container>
);

export default Maze;
