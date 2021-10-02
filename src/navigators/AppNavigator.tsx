import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FullScreenLoader from '../components/FullScreenLoader';
import useNavigator from '../hooks/useNavigator';
import { navigationRef } from './RootNavigation';
import { AuthStackScreen, TabScreen } from './StoneNavigator';

export const AppNavigator = () => {
  const { isLoading, isAuthenticated } = useNavigator();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <TabScreen /> : <AuthStackScreen />}
      {/* <DrawerNavigator /> */}
      {/* {isLogged && <IntroStackScreen />} */}
    </NavigationContainer>
  );
};
