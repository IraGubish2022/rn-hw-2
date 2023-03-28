//import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      <StatusBar style="auto" />
    </>
  );
}
