import React, { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FullScreenLoader from './src/components/FullScreenLoader';
import { AppNavigator } from './src/navigators';
import { setupStore } from './src/redux/store';
import { darkTheme, lightTheme } from './src/theme';

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

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      return;
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<FullScreenLoader />} persistor={persistor}>
          <PaperProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <AppNavigator />
            <FlashMessage position="top" />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
