import React, { FC, ReactNode } from 'react';
import * as Style from './Board.styles';

export interface BoardProps {
  height?: string;
  width?: string;
  children: ReactNode | string;
}

const BoardFrame: FC<BoardProps> = ({ height = '62.5rem', width = '62.5rem', children, ...args }) => {
  return (
    <Style.BoardFrame height={height} width={width} {...args}>
      {children}
    </Style.BoardFrame>
  );
};

const BoardHeader: FC<BoardProps> = ({ height = '62.5rem', children, ...args }) => {
  return (
    <Style.BoardHeader height={height} {...args}>
      {children}
    </Style.BoardHeader>
  );
};

interface BoardType {
  Frame: FC<BoardProps>;
  Header: FC<BoardProps>;
}

const Board: BoardType = {
  Frame: BoardFrame,
  Header: BoardHeader,
};

export default Board;
