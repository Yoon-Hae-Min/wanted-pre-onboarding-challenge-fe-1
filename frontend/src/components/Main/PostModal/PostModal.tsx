import React, { FC } from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import * as Style from './PostModal.styles';

type PostModalProps = Omit<ModalProps, 'children'>;

const PostModal: FC<PostModalProps> = ({ isOpen }) => {
  return (
    <Modal.Frame isOpen={isOpen}>
      <Modal.Header height="3rem">Todo 작성하기</Modal.Header>
      <Modal.Body>
        <Style.FormLayout>
          <Input placeholder="제목을 입력해 주세요" title="제목" width="100%" />
          <TextArea placeholder="내용을 입력해 주세요" title="본문" rows={3} />
        </Style.FormLayout>
      </Modal.Body>
      <Modal.Footer>
        <Button>작성하기</Button>
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default PostModal;
