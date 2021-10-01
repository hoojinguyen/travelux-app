import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signIn, signOut } from '../../../redux/slices/authSlice';
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
          <Text style={styles.title}>
            {isLogged ? 'Da Logged' : 'Chua logged'}
          </Text>

          <>
            {isLogged ? (
              <>
                <Text style={styles.title}>accessToken: {accessToken}</Text>

                <Text style={styles.title}>refreshToken: {refreshToken}</Text>
              </>
            ) : null}
          </>

          <Text style={styles.title}>Count: {count}</Text>

          <View style={styles.buttonGroup}>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
            <Button
              title="Increment with saga 5"
              onPress={() => dispatch(incrementSaga())}
            />

            <Button
              title="Login"
              onPress={() =>
                dispatch(signIn({ email: 'hoi@gmail.com', password: '123456' }))
              }
            />
            <Button title="Logout" onPress={() => dispatch(signOut())} />
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
