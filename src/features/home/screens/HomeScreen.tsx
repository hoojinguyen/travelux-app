import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Discount from '../components/Discount';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import ListPlace from '../components/ListPlace';
import Promotion from '../components/Promotion';
import Search from '../components/Search';
import { HomeStyle as styles } from '../styles';
import Resources from '../../../constants/resources.json';
import ListRoom from '../components/ListRoom';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View style={styles.fixed}>
        <Header />
        <Search />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}>
        <ListPlace data={Resources.places} />
        <Discount data={Resources.discount} />
        <Catalog data={Resources.houses} />
        <Promotion data={Resources.promotion} />
        <View style={styles.content}>
          {Resources.topics.map(item => (
            <ListRoom
              key={item.id}
              data={item.listRoom}
              title={item.title}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
