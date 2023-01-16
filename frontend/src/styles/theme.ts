import { DefaultTheme, css } from 'styled-components';

export const colors = {
  blue: {
    '3': '#438AFF',
    '5': '#A1C5FF',
  },
  gray: {
    '1': 'rgba(0, 0, 0, 0.25)',
    '2': '#C7C7C7',
    '5': '#444444',
  },
  white: {
    '0': '#FFFFFF',
  },
  red: {
    '0': '#FF0000',
    '3': '#FF8080',
  },
} as const;
export const animation = {
  hoverButton: css`
    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  `,
} as const;

const theme: DefaultTheme = { colors, animation };

export default theme;
