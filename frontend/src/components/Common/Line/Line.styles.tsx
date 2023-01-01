import styled from 'styled-components';
import { LineProps } from './Line';

const Line = styled.hr<LineProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const VerticalLine = styled(Line)`
  border-top: 0.3px solid ${({ theme }) => theme.colors.gray[2]};
`;

export const HorizontalLine = styled(Line)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  display: block;
  margin-top: 0px;
  border-left: 0.3px solid ${({ theme }) => theme.colors.gray[2]};
`;
