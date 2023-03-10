import React from 'react';
import * as Style from './Fab.styles';
import { ReactComponent as PluseIcon } from '../../../assets/svg/plus.svg';

const Fab = ({ ...args }) => {
  return (
    <Style.Fab {...args}>
      <PluseIcon height="1.6rem" width="1.6rem" />
    </Style.Fab>
  );
};

export default Fab;
