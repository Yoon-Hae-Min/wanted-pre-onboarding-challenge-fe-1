import React, { FC, ReactElement } from 'react';
import * as Style from './Button.styles';

export interface ButtonProps {
  children?: ReactElement | string;
  height?: string;
  width?: string;
  color?: 'primary' | 'warning';
}

const Button: FC<ButtonProps> = ({ color, height = '1.875rem', width = '7.5rem', children }) => {
  return (
    <Style.Button height={height} width={width} color={color}>
      {children}
    </Style.Button>
  );
};

export default Button;
