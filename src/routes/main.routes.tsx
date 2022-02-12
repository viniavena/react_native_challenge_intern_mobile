import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import MainScreen from '../screens/private/MainScreen';
import SignUpScreen from '../screens/public/SignUpScreen';
import SignInScreen from '../screens/public/SignInScreen';
import OnboardScreen from '../screens/public/OnboardScreen';

type RootStackParamList = {
    OnboardScreen: undefined;
    SignInScreen: undefined;
    SignUpScreen: undefined;
    MainScreen: undefined;
  };

export type PropsOnboardScreen = NativeStackScreenProps<RootStackParamList, 'OnboardScreen'>;
export type PropsSignInScreen = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;
export type PropsSignUpScreen = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;
export type PropsMainScreen = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const RootStack = createStackNavigator<RootStackParamList>();

export default function MainStack(){
    return(
      <RootStack.Navigator 
      initialRouteName='MainScreen' 
      screenOptions={{headerShown: false}}>

    <RootStack.Screen name='OnboardScreen' component={OnboardScreen}/>
    
    <RootStack.Screen name='SignInScreen' component={SignInScreen}   />

    <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>

    <RootStack.Screen name='MainScreen' component={MainScreen}
        options={{ gestureEnabled: false }}
    />

  </RootStack.Navigator>)
}
