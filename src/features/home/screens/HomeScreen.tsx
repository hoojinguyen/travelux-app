import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { login, logout } from '../../../redux/slices/authSlice';
import {
  decrement,
  increment,
  incrementSaga,
} from '../../../redux/slices/counterSlice';

export function HomeScreen() {
  const count = useAppSelector(state => state.counter.value);
  const loading = useAppSelector(state => state.counter.status);
  const isLoadingAuth = useAppSelector(state => state.auth.isLoading);
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const refreshToken = useAppSelector(state => state.auth.refreshToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('init');
  }, []);

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text h1 style={styles.title}>
            {isLogged ? 'Da Logged' : 'Chua logged'}
          </Text>

          <>
            {isLogged ? (
              <>
                <Text h1 style={styles.title}>
                  accessToken: {accessToken}
                </Text>

                <Text h1 style={styles.title}>
                  refreshToken: {refreshToken}
                </Text>
              </>
            ) : null}
          </>

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
              title="Login"
              loading={isLoadingAuth}
              onPress={() =>
                dispatch(login({ email: 'hoi@gmail.com', password: '123456' }))
              }
            />
            <Button
              style={styles.buttonItem}
              title="Logout"
              onPress={() => dispatch(logout())}
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
