import React from 'react';
import { Pressable, View } from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialStyle as styles } from '../styles';

export default function SignInSocial() {
  const handleSignInFacebook = () => {
    console.log('Sign in fb');
  };
  const handleSignInGoogle = () => {
    console.log('Sign in google');
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleSignInFacebook}
        style={[styles.btnSocial, styles.btnFacebook]}>
        <Icon name="facebook" color={Colors.blue700} size={28} />
      </Pressable>
      <Pressable
        onPress={handleSignInGoogle}
        style={[styles.btnSocial, styles.btnGoogle]}>
        <Icon name="google" color={Colors.red600} size={28} />
      </Pressable>
    </View>
  );
}
