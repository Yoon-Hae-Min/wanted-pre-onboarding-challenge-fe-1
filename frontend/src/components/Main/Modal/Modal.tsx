import React, { FC, PropsWithChildren } from 'react';
import { BoardProps } from '../../Common/Board/Board';
import * as Style from './Modal.styles';

export interface ModalProps extends BoardProps {
  isOpen: boolean;
  onClick: () => void;
}

const ModalFrame: FC<ModalProps> = ({ isOpen, onClick, width = '30rem', height = '24rem', children }) => {
  return (
    <>
      <Style.Overlay isOpen={isOpen} onClick={onClick}></Style.Overlay>
      <Style.ModalFrame isOpen={isOpen} width={width} height={height}>
        {children}
      </Style.ModalFrame>
    </>
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
