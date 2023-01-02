import React, { FC, ReactNode } from 'react';
import Board, { BoardProps } from '../../Common/Board/Board';
import * as Style from './Modal.styles';

interface PropsWithChildren {
  children: ReactNode | string;
}

export interface ModalProps extends BoardProps {
  isOpen: boolean;
}

const ModalFrame: FC<ModalProps> = ({ isOpen, width = '30rem', height = '24rem', children }) => {
  return (
    <Style.Overlay isOpen={isOpen}>
      <Board.Frame width={width} height={height}>
        {children}
      </Board.Frame>
    </Style.Overlay>
  );
};

const ModalHeader: FC<BoardProps> = ({ children, ...args }) => (
  <Style.ModalHeader {...args}>{children}</Style.ModalHeader>
);
const ModalBody: FC<PropsWithChildren> = ({ children, ...args }) => (
  <Style.ModalBody {...args}>{children}</Style.ModalBody>
);
const ModalFooter: FC<PropsWithChildren> = ({ children, ...args }) => (
  <Style.ModalFooter {...args}>{children}</Style.ModalFooter>
);

interface ModalType {
  Frame: FC<ModalProps>;
  Header: FC<BoardProps>;
  Body: FC<PropsWithChildren>;
  Footer: FC<PropsWithChildren>;
}
const Modal: ModalType = {
  Frame: ModalFrame,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};

export default Modal;
