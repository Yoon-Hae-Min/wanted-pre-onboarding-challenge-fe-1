import styled from 'styled-components';
import { ReactComponent as Profile } from '../../../assets/svg/profile.svg';
import { ReactComponent as Logout } from '../../../assets/svg/logout.svg';

export const NavigationBarLayout = styled.nav`
  position: absolute;
  right: 0;
  margin-right: -4.2rem;
`;

export const NavigationBarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0.3rem;
`;

export const LogoutIcon = styled(Logout)`
  ${({ theme }) => theme.animation.hoverButton}
  cursor: pointer;
`;
export const ProfileIcon = styled(Profile)`
  ${({ theme }) => theme.animation.hoverButton}
  cursor: pointer;
`;
