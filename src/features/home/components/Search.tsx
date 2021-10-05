import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SearchStyle as styles } from '../styles';

export default function Search() {
  const [key, setKey] = useState('');
  return (
    <View style={styles.wrapper}>
      <FontAwesome
        style={styles.searchLogo}
        name="search"
        color={Colors.grey600}
        size={22}
      />
      <TextInput
        value={key}
        onChangeText={value => setKey(value)}
        autoCapitalize="none"
        placeholder="Enter where do you want to go?"
        placeholderTextColor={Colors.grey900}
        style={styles.textInput}
      />
    </View>
  );
}
