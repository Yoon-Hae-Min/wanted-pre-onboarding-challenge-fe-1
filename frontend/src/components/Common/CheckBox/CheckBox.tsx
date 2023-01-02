import React, { FC, ReactElement } from 'react';
import * as Style from './CheckBox.styles';

interface CheckBoxProps {
  children?: ReactElement | string;
  id: string;
}

const CheckBox: FC<CheckBoxProps> = ({ children, id }) => {
  return (
    <Style.CheckBoxLayout>
      <Style.CheckInput type="checkbox" id={id} />
      <Style.CheckBoxIcon htmlFor={id} />
      <Style.Label>{children}</Style.Label>
    </Style.CheckBoxLayout>
  );
};

export default CheckBox;
