import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { ListRoomStyle as styles } from '../styles';

interface ListRoomProps {
  title: string;
  description: string;
  data: {
    id: string | number;
    image: string;
    type: string;
    name: string;
    extraInfo: string;
    price: string;
  }[];
}

export default function ListRoom({ data, title, description }: ListRoomProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.roomWrapper}>
        {data.map(item => (
          <Pressable
            key={item.id}
            style={styles.room}
            onPress={() => Alert.alert('Click to', item.name)}>
            <Image
              source={{ uri: item.image }}
              resizeMode="center"
              style={styles.imageRoom}
            />
            <Text style={styles.typeRoom}>{item.type}</Text>
            <Text style={styles.nameRoom}>{item.name}</Text>
            <Text style={styles.infoRoom}>{item.extraInfo}</Text>
            <Text style={styles.priceRoom}>{item.price}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.action}>
        <Pressable style={styles.buttonViewAll}>
          <Text style={styles.textViewAll}>View all</Text>
        </Pressable>
      </View>
    </View>
  );
}
