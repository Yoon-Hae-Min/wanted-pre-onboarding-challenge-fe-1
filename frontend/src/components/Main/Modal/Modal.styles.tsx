import styled from 'styled-components';
import { BoardBody, BoardFrame, BoardHeader } from '../../Common/Board/Board.styles';
import { ModalProps } from './Modal';

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
`;
export const ModalHeader = styled(BoardHeader)``;
export const ModalBody = styled(BoardBody)``;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
`;
