import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import FlashMessage from 'react-native-flash-message';

import { AppNavigator } from './src/navigators';
import { lightTheme, darkTheme } from './src/theme';

import { PersistGate } from 'redux-persist/integration/react';
import { setupStore } from './src/redux/store';
import { Provider } from 'react-redux';
import GreenIndicator from './src/components/GreenIndicator';

export default function App() {
  const { store, persistor } = setupStore();

  const colorSchemeDefault: ColorSchemeName = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>(colorSchemeDefault);

  useEffect(() => {
    const listener = ({
      colorScheme: newColorScheme,
    }: {
      colorScheme: ColorSchemeName;
    }) => {
      setTheme(newColorScheme);
    };

    Appearance.addChangeListener(listener);

    return () => Appearance.removeChangeListener(listener);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<GreenIndicator />} persistor={persistor}>
          <ThemeProvider
            useDark={theme === 'dark'}
            theme={theme === 'dark' ? darkTheme : lightTheme}>
            <>
              <AppNavigator />
              <FlashMessage position="top" />
            </>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
