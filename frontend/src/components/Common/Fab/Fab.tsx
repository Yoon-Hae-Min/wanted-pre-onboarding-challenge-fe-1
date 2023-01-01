import React from 'react';
import * as Style from './Fab.styles';
import { ReactComponent as PluseIcon } from '../../assets/svg/plus.svg';

const Fab = () => {
  return (
    <Style.Fab>
      <PluseIcon />
    </Style.Fab>
  );
};

export default Fab;
