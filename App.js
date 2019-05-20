import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Loading from './app/screens/Loading';
import Main from './app/screens/Main';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';

const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading',
  }
));


export default App;

