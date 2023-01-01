import React, { FC, ReactElement } from 'react';
import * as Style from './CheckBox.styles';

interface CheckBoxProps {
  children?: ReactElement | string;
}

const CheckBox: FC<CheckBoxProps> = ({ children }) => {
  return (
    <Style.CheckBoxLayout>
      <Style.CheckInput type="checkbox" id="checkbox" />
      <Style.CheckBoxIcon htmlFor="checkbox" />
      <Style.Label>{children}</Style.Label>
    </Style.CheckBoxLayout>
  );
};

export default CheckBox;
