import React, { FC } from 'react';
import * as Style from './Input.styles';

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
    <Style.InputLayout width={width} height={height} {...props}>
      <Style.InputField placeholder={placeholder} />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
    </Style.InputLayout>
  );
};

export default Input;
