import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, Footer, SignInForm } from '../components';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SignInScreen = ({ route, navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" />
      <SignInForm />
      <Button
        title="Go forget"
        icon={<Icon name="arrow-right" size={15} color="white" />}
        onPress={() => navigation.navigate('ForgetPasswordScreen')}
      />
      <Button
        title="Go SignUp"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
