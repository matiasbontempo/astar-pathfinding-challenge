import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Title = styled.h1`
  font-size: 64px;
  text-shadow: 4px 4px 0px #423e37;
  margin: 0 0 12px;
  padding: 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: normal;
  background: #423e37;
  margin: 0 0 32px;
  padding: 8px 16px;
  border-radius: 4px;
`;
