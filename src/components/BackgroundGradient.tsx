import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function BackgroundGradient({ style, children }: any) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={['red', 'black']}
      style={[{ flex: 1 }, ...[style]]}>
      {children}
    </LinearGradient>
  );
}
