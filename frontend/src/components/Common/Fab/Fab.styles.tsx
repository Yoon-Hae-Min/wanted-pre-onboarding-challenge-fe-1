import styled from 'styled-components';

export const Fab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.blue[5]};
  border-radius: 50%;
`;
