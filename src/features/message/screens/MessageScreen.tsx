import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { MessageStyle as styles } from '../styles';

export function MessageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View>
        <Text>Message Screen</Text>
      </View>
    </SafeAreaView>
  );
}
