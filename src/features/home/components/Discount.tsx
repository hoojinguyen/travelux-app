import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { DiscountStyle as styles } from '../styles';
interface DiscountProps {
  data: {
    name: string;
    title: string;
    image: string;
    description: string;
  };
}

export default function Discount({ data }: DiscountProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{data.title}</Text>
      <Pressable style={styles.card}>
        <Image
          source={{ uri: data.image }}
          resizeMode="center"
          style={styles.cardImage}
        />
        <Text style={styles.cardName}>{data.name}</Text>
        <Text style={styles.cardDescription}>{data.description}</Text>
      </Pressable>
    </View>
  );
}
