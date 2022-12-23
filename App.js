/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Router from './src/navigation/Router';

import HomeScreen from './src/screens/Home';

import {withAuthenticator} from 'aws-amplify-react-native';

/** Correct import  */
/** It's wrong in Amplify React Native docs.  */
import Amplify from '@aws-amplify/core';
/** Check the right path for aws-exports.js file */
/** It may be stored in src folder by default */
import config from './src/aws-exports';
Amplify.configure(config);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
