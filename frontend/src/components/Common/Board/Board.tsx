import React, { FC, ReactNode } from 'react';
import * as Style from './Board.styles';

interface PropsWithChild {
  children: ReactNode | string;
}

export interface BoardProps extends PropsWithChild {
  height?: string;
  width?: string;
}

const BoardFrame: FC<BoardProps> = ({ height, width = '62.5rem', children, ...args }) => {
  return (
    <Style.BoardFrame height={height} width={width} {...args}>
      {children}
    </Style.BoardFrame>
  );
};

const BoardHeader: FC<BoardProps> = ({ height = '10rem', children, ...args }) => {
  return (
    <Style.BoardHeader height={height} {...args}>
      {children}
    </Style.BoardHeader>
  );
};

const BoardBody: FC<BoardProps> = ({ height, children, ...args }) => (
  <Style.BoardBody height={height} {...args}>
    {children}
  </Style.BoardBody>
);

interface BoardType {
  Frame: FC<BoardProps>;
  Header: FC<BoardProps>;
  Body: FC<BoardProps>;
}

const Board: BoardType = {
  Frame: BoardFrame,
  Header: BoardHeader,
  Body: BoardBody,
};

export default Board;
