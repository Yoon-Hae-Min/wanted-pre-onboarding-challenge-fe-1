import styled from 'styled-components';
import { BoardProps } from './Board';

export const BoardFrame = styled.div<BoardProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.white[0]};
  box-shadow: 0rem 0.25rem 1.25rem 0rem ${({ theme }) => theme.colors.gray[1]};
  border-radius: 0.625rem;
`;

export const BoardHeader = styled.div<BoardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  width: 100%;
  color: ${({ theme }) => theme.colors.white[0]};
  background-color: ${({ theme }) => theme.colors.blue[3]};
  border-radius: 0.625rem 0.625rem 0rem 0rem;
`;

export const BoardBody = styled.div`
  position: relative;
  padding: 1rem;
`;
