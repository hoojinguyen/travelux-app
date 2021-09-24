import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import BackgroundGradient from '../../../components/BackgroundGradient';
import { SafeAreaView } from 'react-native-safe-area-context';
export function SearchScreen() {
  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="light-content" />

        <ScrollView style={styles.scrollView}>
          {[...Array(200)].map((x, i) => (
            <Text key={i} style={styles.text}>
              Tab1 Screen -- {i}
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    width: '100%',
  },
  scrollView: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
