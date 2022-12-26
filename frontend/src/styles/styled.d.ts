import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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
    };
  }
}
