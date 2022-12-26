import React, { FC, ReactElement } from 'react';
import { BoardFrame } from './Board.styles';

export interface BoardFrameProps {
  height: string;
  width: string;
}

interface BoardProps extends BoardFrameProps {
  children: ReactElement;
}

const Board: FC<BoardProps> = ({ height, width, children, ...args }) => {
  return (
    <BoardFrame height={height} width={width} {...args}>
      {children}
    </BoardFrame>
  );
};

export default Board;
