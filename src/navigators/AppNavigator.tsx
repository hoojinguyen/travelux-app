import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { navigationRef } from './RootNavigation';

import { AuthStackScreen } from './StoneNavigator';
import { IntroStackScreen } from './StoneNavigator';

export const AppNavigator = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {isLogged && <IntroStackScreen />}
        {!isLogged && <AuthStackScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
