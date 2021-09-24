import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './RootNavigation';

import {
  // IntroStackScreen,
  // AuthStackScreen,
  // DrawerNavigator,
  TabScreen,
} from './StoneNavigator';

export const AppNavigator = () => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <NavigationContainer ref={navigationRef}>
      <TabScreen />
      {/* <DrawerNavigator /> */}
      {/* {isLogged && <IntroStackScreen />} */}
      {/* {!isLogged && <AuthStackScreen />} */}
    </NavigationContainer>
  );
};
