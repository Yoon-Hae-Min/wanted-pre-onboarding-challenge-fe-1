import styled from 'styled-components';
import { BoardFrameProps } from './Board';

export const BoardFrame = styled.div<BoardFrameProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.white[0]};
  box-shadow: 0rem 0.25rem 1.25rem 0rem ${({ theme }) => theme.colors.gray[1]};
  border-radius: 0.625rem;
`;
