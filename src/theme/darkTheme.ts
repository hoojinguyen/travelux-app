import { darkColors } from './colors';
import { DefaultTheme } from 'react-native-paper';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...darkColors,
  },
};
