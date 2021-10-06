import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { PromotionStyle as styles } from '../styles';
interface PromotionProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
}

export default function Promotion({ data }: PromotionProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Pressable style={styles.image}>
        <Image
          source={{ uri: data.image }}
          resizeMode="center"
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}
