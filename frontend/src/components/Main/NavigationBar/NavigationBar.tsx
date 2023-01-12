import React from 'react';
import Board from '../../Common/Board/Board';
import * as Style from './NavigationBar.styles';
import { removeLocalStorage } from '../../../utils/localStorage';
import { PAGE_PATH } from '../../../constants/path';
import { useNavigate } from 'react-router';

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeLocalStorage('token');
    navigate(PAGE_PATH.SIGN_IN);
  };
  return (
    <Style.NavigationBarLayout>
      <Board.Frame width="3rem" height="6rem">
        <Style.NavigationBarBody>
          <Style.ProfileIcon width="2rem" height="2rem" />
          <Style.LogoutIcon width="2rem" height="2rem" onClick={handleLogout} />
        </Style.NavigationBarBody>
      </Board.Frame>
    </Style.NavigationBarLayout>
  );
};

export default NavigationBar;
