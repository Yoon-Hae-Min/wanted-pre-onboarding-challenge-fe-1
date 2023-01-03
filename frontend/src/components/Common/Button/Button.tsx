import React, { FC, ReactElement, ButtonHTMLAttributes } from 'react';
import * as Style from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  height?: string;
  width?: string;
  color?: 'primary' | 'warning';
}

const Button: FC<ButtonProps> = ({ color, height = '1.875rem', width = '7.5rem', children, ...args }) => {
  return (
    <Style.Button height={height} width={width} color={color} {...args}>
      {children}
    </Style.Button>
  );
};

export default Button;
