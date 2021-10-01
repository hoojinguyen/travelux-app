import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from 'react-native-paper';

export default function FullScreenLoader() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        top: 0,
        left: 0,
        backgroundColor: 'white',
      }}>
      <ActivityIndicator size={60} color={Colors.green900} />
    </View>
  );
}
