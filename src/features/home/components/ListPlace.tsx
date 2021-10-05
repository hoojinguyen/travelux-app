import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import Resources from '../../../constants/resources.json';
import { PlaceStyle as styles } from '../styles';

export default function ListPlace() {
  const redirectToPlace = (item: any) => {
    Alert.alert('Click to', item.name);
  };
  return (
    <View style={styles.wrapper}>
      {Resources.places.map(item => (
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
