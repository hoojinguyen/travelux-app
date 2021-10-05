import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Colors } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AccountScreen } from '../features/account';
import {
  ForgetPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from '../features/auth';
import {
  Drawer1Screen,
  Drawer2Screen,
  Drawer3Screen,
} from '../features/drawer';
import { FavoriteScreen } from '../features/favorite';
import { HomeScreen } from '../features/home';
import { IntroduceScreen } from '../features/introduce';
import { MessageScreen } from '../features/message';
import { ReservationScreen } from '../features/reservation';

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

const Tab = createMaterialBottomTabNavigator();
export const TabScreen = () => {
  const tabs = [
    {
      name: 'Home',
      component: HomeScreen,
      label: 'Home',
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
    },
    {
      name: 'Favorite',
      component: FavoriteScreen,
      label: 'Favorite',
      activeIcon: 'heart',
      inactiveIcon: 'heart-outline',
    },
    {
      name: 'Reservation',
      component: ReservationScreen,
      label: 'Reservation',
      activeIcon: 'book',
      inactiveIcon: 'book-outline',
    },
    {
      name: 'Message',
      component: MessageScreen,
      label: 'Message',
      activeIcon: 'chatbox',
      inactiveIcon: 'chatbox-outline',
    },
    {
      name: 'Account',
      component: AccountScreen,
      label: 'Account',
      icon: 'person-outline',
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: Colors.lightGreen900,
      }}>
      {tabs.map(
        ({ name, component, label, activeIcon, inactiveIcon }, index) => (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarLabel: label,
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <Ionicons name={activeIcon} color={color} size={24} />
                ) : (
                  <Ionicons name={inactiveIcon} color={color} size={24} />
                ),
            }}
          />
        ),
      )}
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
