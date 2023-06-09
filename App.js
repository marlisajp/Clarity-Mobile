import app from './firebaseConfig';
app();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import useAuth from './app/hooks/useAuth';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  const user = useAuth();
  console.log('user: ', user);

  return (
    <PaperProvider>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);
