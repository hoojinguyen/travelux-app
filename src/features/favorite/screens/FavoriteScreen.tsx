import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { FavoriteStyle as styles } from '../styles';

export function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View>
        <Text>Favorite Screen</Text>
      </View>
    </SafeAreaView>
  );
}
