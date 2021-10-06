import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signOut } from '../../../redux/slices/authSlice';
import { AccountStyle as styles } from '../styles';

export function AccountScreen() {
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector(state => state.auth.isLogged);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const currentUser = useAppSelector(state => state.auth.currentUser);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View>
        <Text>Account Screen</Text>
      </View>
      <View>
        <Button title="Logout" onPress={() => dispatch(signOut())} />
      </View>
    </SafeAreaView>
  );
}
