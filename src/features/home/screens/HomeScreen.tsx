import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Discount from '../components/Discount';
import Header from '../components/Header';
import House from '../components/House';
import ListPlace from '../components/ListPlace';
import Promotion from '../components/Promotion';
import Search from '../components/Search';
import { HomeStyle as styles } from '../styles';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Search />
        <ListPlace />
        <Discount />
        <House />
        <Promotion />
      </ScrollView>
    </SafeAreaView>
  );
}
