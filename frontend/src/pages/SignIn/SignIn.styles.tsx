import styled from 'styled-components';

export const SignInHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.625rem;
  margin-bottom: 1.625rem;
`;

export const SignInTitle = styled.span`
  font-size: 1.125rem;
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0rem;
  margin-top: 2.625rem;
`;

export const SignInFooter = styled.div`
  margin-top: 2.75rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToSignUpButton = styled.a`
  margin-top: 0.4375rem;
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.blue[3]};
  cursor: pointer;
`;
