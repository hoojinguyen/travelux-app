import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const IntroduceScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ textAlign: 'center', color: 'red' }}>
          IntroduceScreen
        </Text>
      </View>
    </SafeAreaView>
  );
};
