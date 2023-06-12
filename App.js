import { app } from './firebaseConfig';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from '@rneui/themed';

import AuthNavigator from './app/navigation/AuthNavigator';
import useAuth from './app/hooks/useAuth';
import { name as appName } from './app.json';
import AppNavigator from './app/navigation/AppNavigator';
import { getFirebaseDatabase } from './firebaseConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const user = useAuth();
  const database = getFirebaseDatabase();
  console.log('database', database);
  console.log('user: ', user);

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
AppRegistry.registerComponent(appName, () => App);
