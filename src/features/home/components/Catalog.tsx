import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { HouseStyle as styles } from '../styles';
interface CatalogProps {
  data: {
    id: string | number;
    image: string;
    name: string;
  }[];
}

export default function Catalog({ data }: CatalogProps) {
  return (
    <View style={styles.wrapper}>
      {data.map(item => (
        <Pressable key={item.id} style={styles.item}>
          <Image
            source={{ uri: item.image }}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}
