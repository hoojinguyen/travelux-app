import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { ReservationStyle as styles } from '../styles';

export function ReservationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View>
        <Text>Reservation Screen</Text>
      </View>
    </SafeAreaView>
  );
}
