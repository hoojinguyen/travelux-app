import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IntroduceScreen } from '../features/introduce';
import {
  SignInScreen,
  SignUpScreen,
  ForgetPasswordScreen,
} from '../features/auth';
import { HomeScreen } from '../features/home';

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

const SignInStack = createNativeStackNavigator();
export const SignInStackScreen = () => (
  <SignInStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      presentation: 'modal',
    }}>
    <SignInStack.Screen name="SignInScreen" component={SignInScreen} />
    <SignInStack.Screen
      name="ForgetPasswordScreen"
      component={ForgetPasswordScreen}
    />
  </SignInStack.Navigator>
);

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignInStackScreen" component={SignInStackScreen} />
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
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
