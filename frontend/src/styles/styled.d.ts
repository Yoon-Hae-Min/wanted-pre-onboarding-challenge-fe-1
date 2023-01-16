import 'styled-components';
import { animation, colors } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    animation: typeof animation;
  }
}
