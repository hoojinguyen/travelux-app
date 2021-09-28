import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchUsers } from '../../../redux/slices/usersSlice';

// import users2 from '../../../services/users.json';

const ImageSrc =
  'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg';

export function SearchScreen() {
  const users = useAppSelector(state => state.users.users);
  // const loading = useAppSelector(state => state.users.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      await dispatch(fetchUsers());
    }

    fetchMyAPI();
  }, [dispatch]);

  const keyExtractor = (item: any, index: number) => index.toString();

  const renderItem = ({ item }: any) => (
    <ListItem.Swipeable
      bottomDivider
      leftContent={
        <Button
          title="Info"
          icon={{ name: 'info', color: 'white' }}
          buttonStyle={{ minHeight: '100%' }}
        />
      }>
      <Avatar rounded size="medium" source={{ uri: ImageSrc }} />
      <ListItem.Content>
        <ListItem.Title style={styles.text}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.text}>{item.phone}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="dark-content" />
        <FlatList
          keyExtractor={keyExtractor}
          data={users}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
  scrollView: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },
  user: {
    padding: 20,
  },
  name: {
    color: 'black',
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
