import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'react-native-elements';

const GreenIndicator = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        top: 0,
        left: 0,
        backgroundColor: theme.colors?.primary,
      }}>
      <ActivityIndicator size={60} color={theme.colors?.success} />
    </View>
  );
};

export default GreenIndicator;
