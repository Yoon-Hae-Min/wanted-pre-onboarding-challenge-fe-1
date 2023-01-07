import styled, { css, keyframes } from 'styled-components';
import check from '../../../assets/svg/check.svg';

export const CheckBoxLayout = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxIcon = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  &:before {
    content: '';
    height: 1rem;
    width: 1rem;
    background-color: ${({ theme }) => theme.colors.white[0]};
    border: 0.0625rem solid ${({ theme }) => theme.colors.gray[5]};
    border-radius: 50%;
  }

  &:after {
    opacity: 0;
    content: '';
    position: absolute;
    height: 1rem;
    width: 1rem;
    border: 0.0625rem solid ${({ theme }) => theme.colors.gray[5]};
    border-radius: 50%;
    background-image: url(${check});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.blue[5]};
  }
`;
const lineThrough = keyframes`
from{
  width:0;
}
to{
  width:100%;
}
`;

const lineThroughAnimation = css`
  animation: ${lineThrough} 0.2s linear forwards;
`;

export const Label = styled.span<{ check: boolean }>`
  position: relative;
  margin-left: 0.3125rem;
  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 0;
    width: 0%;
    height: 1px;
    background: black;
    ${(props) => (props.check ? lineThroughAnimation : '')};
  }
`;

export const CheckInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
  &:checked + ${CheckBoxIcon} {
    :after {
      opacity: 1;
    }
  }
`;
