import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { IntroduceScreen } from '../features/introduce';
import {
  SignInScreen,
  SignUpScreen,
  ForgetPasswordScreen,
} from '../features/auth';
import { HomeScreen } from '../features/home';
import { SearchScreen } from '../features/search';
import { FavoritesScreen } from '../features/favorites';

import {
  Drawer1Screen,
  Drawer2Screen,
  Drawer3Screen,
} from '../features/drawer';

import { navigationTheme } from '../theme';

const IntroStack = createNativeStackNavigator();
export const IntroStackScreen = () => (
  <IntroStack.Navigator>
    <IntroStack.Screen
      name="IntroScreen"
      component={IntroduceScreen}
      options={{ headerShown: false }}
    />
  </IntroStack.Navigator>
);

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Group>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen
        options={{
          presentation: 'modal',
          gestureEnabled: true,
          headerShown: true,
          headerTitle: 'Forgot Password',
        }}
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </AuthStack.Group>
    <AuthStack.Group>
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Group>
  </AuthStack.Navigator>
);

const HomeStack = createNativeStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
export const TabScreen = () => {
  const { colors, bottomTabStyles } = navigationTheme;
  const tabs = [
    {
      name: 'Home',
      component: HomeScreen,
      label: 'Home',
      icon: 'home-outline',
    },
    {
      name: 'Search',
      component: SearchScreen,
      label: 'Search',
      icon: 'search-outline',
    },
    {
      name: 'Favorites',
      component: FavoritesScreen,
      label: 'Your Library',
      icon: 'library-outline',
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.activeColor}
      inactiveColor={colors.inactiveColor}
      barStyle={{
        backgroundColor: colors.background,
        opacity: bottomTabStyles.opacity,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
      }}>
      {tabs.map(({ name, component, label, icon }, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={component}
          options={{
            tabBarLabel: label,
            tabBarIcon: ({ color }) => (
              <Ionicons name={icon} color={color} size={24} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="TabScreen">
      <Drawer.Screen name="Drawer1" component={Drawer1Screen} />
      <Drawer.Screen name="Drawer2" component={Drawer2Screen} />
      <Drawer.Screen name="Drawer3" component={Drawer3Screen} />
    </Drawer.Navigator>
  );
};
