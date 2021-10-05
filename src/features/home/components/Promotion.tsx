import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Resources from '../../../constants/resources.json';
import { PromotionStyle as styles } from '../styles';

export default function Promotion() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{Resources.promotion.title}</Text>
      <Text style={styles.description}>{Resources.promotion.description}</Text>
      <Pressable style={styles.image}>
        <Image
          source={{ uri: Resources.promotion.image }}
          resizeMode="center"
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}
