import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import FlashMessage from 'react-native-flash-message';

import { AppNavigator } from './src/navigators';
import { lightTheme, darkTheme } from './src/theme';

export default function App() {
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
      <ThemeProvider
        useDark={theme === 'dark'}
        theme={theme === 'dark' ? darkTheme : lightTheme}>
        <>
          <AppNavigator />
          <FlashMessage position="top" />
        </>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
