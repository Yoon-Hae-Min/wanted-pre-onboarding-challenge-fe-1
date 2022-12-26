import React, { FC } from 'react';
import { ErrorMessage, InputLayout, InputField } from './Input.styles';

export interface InputLayoutProps {
  width?: string;
  height?: string;
}

interface InputProps extends InputLayoutProps {
  errorMessage?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ width = '17.5rem', height, placeholder, errorMessage, ...props }) => {
  return (
    <InputLayout width={width} height={height} {...props}>
      <InputField placeholder={placeholder} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputLayout>
  );
};

export default Input;
