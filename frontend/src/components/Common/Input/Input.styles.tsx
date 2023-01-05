import styled from 'styled-components';
import { InputProps } from './Input';

export const SignInFormTitle = styled.span`
  display: block;
  font-size: 0.625rem;
  margin-bottom: 0.3125rem;
`;

export const InputLayout = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const InputField = styled.input`
  height: 2rem;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
  border-radius: 0.3rem;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.colors.blue[3]};
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.red[0]};
  font-size: 0.5rem;
`;
