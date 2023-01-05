import React, { FC, ReactElement, useState } from 'react';
import * as Style from './CheckBox.styles';

interface CheckBoxProps {
  children?: ReactElement | string;
  id: string;
  onLabelClick?: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({ children, id, onLabelClick }) => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck((pre) => !pre);
  };
  return (
    <Style.CheckBoxLayout>
      <Style.CheckInput type="checkbox" id={id} onChange={handleCheck} />
      <Style.CheckBoxIcon htmlFor={id} />
      <Style.Label onClick={onLabelClick} check={check}>
        {children}
      </Style.Label>
    </Style.CheckBoxLayout>
  );
};

export default CheckBox;
