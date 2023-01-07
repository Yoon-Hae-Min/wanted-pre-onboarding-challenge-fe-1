import 'styled-components';
interface colorsTheme {
  blue: {
    '3': string;
  };
  gray: {
    '1': string;
    '2': string;
  };
  white: {
    '0': string;
  };
  red: {
    '0': string;
    '3': string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colorsTheme;
    animation: {
      hoverButton: FlattenSimpleInterpolation;
    };
  }
}
