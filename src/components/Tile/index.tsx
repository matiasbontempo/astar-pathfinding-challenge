import React from 'react';

import { Container } from './styles';

import { PropsType } from './types';

const Tile = ({
  wall, start, end, path, onClick,
}: PropsType) => (
  <Container
    wall={wall}
    start={start}
    end={end}
    path={path}
    onClick={onClick}
  />
);

export default Tile;
