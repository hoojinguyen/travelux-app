import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from '../../../components/BackgroundGradient';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch } from '../../../redux/hook';
import { fetchUsers } from '../../../redux/slices/usersSlice';

export function SearchScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      await dispatch(fetchUsers());
    }

    fetchMyAPI();
  }, [dispatch]);

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="dark-content" />
        <View>
          <Text>Search</Text>
        </View>
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
