import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { PropsType } from './types';

const getBackgroundColor = (props: PropsType): string => {
  if (props.wall) return '#423e37';
  if (props.start) return '#0267c1';
  if (props.end) return '#3c887e';
  if (props.path) return '#d52941';

  return 'none';
};

const getBorderRadius = ({ start, end, path }: PropsType): string => {
  // ${({ start, end, path }: PropsType) => ((start || end || path) && '100%')}
  if (start || end || path) return '100%';
  return '8px';
};

const getDimensions = ({ start, end, path }: PropsType): FlattenSimpleInterpolation => {
  if (start || end) {
    return css`
      width: 24px;
      height: 24px;
      margin: 10px 8px;
    `;
  }

  if (path) {
    return css`
      width: 16px;
      height: 16px;
      margin: 13px 12px;
    `;
  }

  return css`
    width: 32px;
    height: 36px;
    margin: 4px 4px;
  `;
};

export const Container = styled.div<PropsType>`
  ${getDimensions};
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};

  cursor: pointer;
  position: relative;
  transition: all 150ms ease-in-out;

  &:hover {
    opacity: 0.5;
  }

`;
