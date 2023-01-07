import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
  background-color: ${({ theme, color }) => {
    const colors = {
      primary: theme.colors.blue[3],
      warning: theme.colors.red[3],
    };
    return colors[color ?? 'primary'];
  }};
  border: none;
  border-radius: 0.3125rem;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.white[0]};
  outline: none;
  ${({ theme }) => theme.animation.hoverButton};
`;
