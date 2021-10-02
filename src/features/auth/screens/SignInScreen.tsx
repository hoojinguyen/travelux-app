import React from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignInForm from '../components/SignInForm';
import SignInSocial from '../components/SignInSocial';
import { AuthStyle as styles } from '../styles';

export const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.header}>
        <Text style={styles.textHeader}>Welcome to my world</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <SignInForm />
        <SignInSocial />
      </Animatable.View>
    </View>
  );
};
