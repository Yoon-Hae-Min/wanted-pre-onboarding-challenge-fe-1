import styled from 'styled-components';
import { BoardBody, BoardHeader } from '../../Common/Board/Board.styles';
import { ModalProps } from './Modal';

export const Overlay = styled.div<ModalProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

export const ModalHeader = styled(BoardHeader)``;
export const ModalBody = styled(BoardBody)``;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
`;
