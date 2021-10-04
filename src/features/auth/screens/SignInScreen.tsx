import React from 'react';
import { Image, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignInForm from '../components/SignInForm';
import SignInSocial from '../components/SignInSocial';
import { AuthStyle as styles } from '../styles';
const PATH_LOGO = '../../../assets/Images/logo.png';

export const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.header}>
        <View style={styles.logoHeader}>
          <Image
            source={require(PATH_LOGO)}
            resizeMode="center"
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.textHeader}>Welcome to Travelux</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <SignInForm />
        <SignInSocial />
      </Animatable.View>
    </View>
  );
};
