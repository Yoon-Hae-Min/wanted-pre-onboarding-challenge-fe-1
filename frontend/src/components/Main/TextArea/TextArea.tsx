import React, { FC, TextareaHTMLAttributes } from 'react';
import * as Style from './TextArea.styles';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  placeholder?: string;
  title?: string;
}

const TextArea: FC<TextAreaProps> = ({ title, placeholder, errorMessage, ...props }) => {
  return (
    <Style.TextAreaLayout>
      <Style.SignInFormTitle>{title}</Style.SignInFormTitle>
      <Style.TextAreaField placeholder={placeholder} {...props} />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
    </Style.TextAreaLayout>
  );
};

export default TextArea;
