import 'styled-components';
import type theme from './theme';

declare module 'styled-components' {
  type ThemeTypes = typeof theme;
  export interface DefaultTheme extends ThemeTypes {}
}
