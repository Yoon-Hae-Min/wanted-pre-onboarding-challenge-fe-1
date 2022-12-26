import React, { FC, ReactElement } from 'react';
import * as Style from './Board.styles';

export interface BoardFrameProps {
  height: string;
  width: string;
}

interface BoardProps extends BoardFrameProps {
  children: ReactElement;
}

const Board: FC<BoardProps> = ({ height, width, children, ...args }) => {
  return (
    <Style.BoardFrame height={height} width={width} {...args}>
      {children}
    </Style.BoardFrame>
  );
};

export default Board;
