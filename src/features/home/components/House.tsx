import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import Resources from '../../../constants/resources.json';
import { HouseStyle as styles } from '../styles';

export default function House() {
  return (
    <View style={styles.wrapper}>
      {Resources.houses.map(item => (
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
