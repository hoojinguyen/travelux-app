import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { PlaceStyle as styles } from '../styles';

interface ListPlaceProps {
  data: {
    id: string | number;
    name: string;
    image: string;
  }[];
}

export default function ListPlace({ data }: ListPlaceProps) {
  const redirectToPlace = (item: any) => {
    Alert.alert('Click to', item.name);
  };
  return (
    <View style={styles.wrapper}>
      {data.map((item: any) => (
        <Pressable
          key={item.id}
          style={styles.item}
          onPress={() => redirectToPlace(item)}>
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
