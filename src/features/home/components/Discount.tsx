import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import Resources from '../../../constants/resources.json';
import { DiscountStyle as styles } from '../styles';

export default function Discount() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{Resources.discount.title}</Text>
      <Pressable style={styles.card}>
        <Image
          source={{ uri: Resources.discount.image }}
          resizeMode="center"
          style={styles.cardImage}
        />
        <Text style={styles.cardName}>{Resources.discount.name}</Text>
        <Text style={styles.cardDescription}>
          {Resources.discount.description}
        </Text>
      </Pressable>
    </View>
  );
}
