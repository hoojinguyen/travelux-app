import React from 'react';
import { Image, Text, View } from 'react-native';
import { HeaderStyle as styles } from '../styles';
const PATH_LOGO = '../../../assets/Images/logo.png';

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Travelux</Text>
      <Image
        source={require(PATH_LOGO)}
        resizeMode="center"
        style={styles.logo}
      />
    </View>
  );
}
