import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAppSelector } from '../redux/hook';
import { navigationRef } from './RootNavigation';
import { AuthStackScreen, TabScreen } from './StoneNavigator';

export const AppNavigator = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogged ? <TabScreen /> : <AuthStackScreen />}
      {/* <DrawerNavigator /> */}
      {/* {isLogged && <IntroStackScreen />} */}
    </NavigationContainer>
  );
};
