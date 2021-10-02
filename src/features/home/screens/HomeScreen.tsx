import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signOut } from '../../../redux/slices/authSlice';

export function HomeScreen() {
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector(state => state.auth.isLogged);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const currentUser = useAppSelector(state => state.auth.currentUser);

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.title}>
            {isLogged ? 'Da Logged' : 'Chua logged'}
          </Text>
          <View>
            {isLogged && (
              <Text style={styles.title}>accessToken: {accessToken}</Text>
            )}
          </View>
          <View>{currentUser && <Text>Email: {currentUser.email}</Text>}</View>
          <View>
            {currentUser && <Text>DispalyName: {currentUser.displayName}</Text>}
          </View>

          <View>
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
