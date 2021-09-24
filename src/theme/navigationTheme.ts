import { DefaultTheme } from '@react-navigation/native';
import { navigationColors } from './colors';
export const navigationTheme = {
  colors: { ...DefaultTheme.colors, ...navigationColors },
  bottomTabStyles: {
    opacity: 0.9,
  },
};
