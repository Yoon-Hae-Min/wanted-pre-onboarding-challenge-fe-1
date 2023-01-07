import styled, { keyframes } from 'styled-components';
import { BoardBody, BoardFrame, BoardHeader } from '../../Common/Board/Board.styles';
import { ModalProps } from './Modal';

export const popUpAnimation = keyframes`
from{
  opacity: 0;
  transform: translateY(3rem);
}
to{
  opacity: 1;
  transform: translateY(0rem);
}
`;

export const Overlay = styled.div<Pick<ModalProps, 'isOpen'>>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;
export const ModalFrame = styled(BoardFrame)<Pick<ModalProps, 'isOpen'>>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 3;
  animation: ${popUpAnimation} 0.2s linear;
`;
export const ModalHeader = styled(BoardHeader)``;
export const ModalBody = styled(BoardBody)``;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
`;
