import React from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignUpForm from '../components/SignUpForm';
import { AuthStyle as styles } from '../styles';

export const SignUpScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* <Animatable.View animation="fadeIn" style={styles.header}>
        <Text style={styles.textHeader}>Register now!</Text>
      </Animatable.View>
      <Animatable.View animation="slideInRight" style={styles.body}>
        <SignUpForm navigation={navigation} />
      </Animatable.View> */}
      <View style={styles.header}>
        <Text style={styles.textHeader}>Register now!</Text>
      </View>
      <View style={styles.body}>
        <SignUpForm navigation={navigation} />
      </View>
    </View>
  );
};
