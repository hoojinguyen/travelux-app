import React from 'react';
import { Image, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignUpForm from '../components/SignUpForm';
import { AuthStyle as styles } from '../styles';
const PATH_LOGO = '../../../assets/Images/logo.png';

export const SignUpScreen = ({ navigation }: any) => {
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
        <Text style={styles.textHeader}>Register now!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <SignUpForm navigation={navigation} />
      </Animatable.View>
    </View>
  );
};
