import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-elements';

export default function BackgroundGradient({ style, children }: any) {
  const { theme } = useTheme();

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={[theme.colors?.background, '#000000']}
      style={[{ flex: 1 }, ...[style]]}>
      {children}
    </LinearGradient>
  );
}
