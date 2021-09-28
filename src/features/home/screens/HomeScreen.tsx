import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import {
  decrement,
  increment,
  incrementSaga,
  incrementSaga10,
} from '../../../redux/slices/counterSlice';

export function HomeScreen() {
  const count = useAppSelector(state => state.counter.value);
  const loading = useAppSelector(state => state.counter.status);
  const dispatch = useAppDispatch();

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text h1 style={styles.title}>
            Count: {count}
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              style={styles.buttonItem}
              title="Increment"
              onPress={() => dispatch(increment())}
            />
            <Button
              style={styles.buttonItem}
              title="Decrement"
              onPress={() => dispatch(decrement())}
            />
            <Button
              style={styles.buttonItem}
              title="Increment with saga 5"
              loading={loading}
              onPress={() => dispatch(incrementSaga())}
            />
            <Button
              style={styles.buttonItem}
              title="Increment with saga 10"
              loading={loading}
              onPress={() => dispatch(incrementSaga10())}
            />
          </View>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 40,
  },
  buttonItem: {
    marginBottom: 20,
  },
});
