import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import colors from '../config/colors';
import AddNoteScreen from '../screens/Notes/AddNoteScreen';
import NotesScreen from '../screens/Notes/NotesScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

const NoteNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.NOTESMAINSCREEN}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.NOTESMAINSCREEN} component={NotesScreen} />
    <Stack.Screen
      name={routes.ADDNOTE}
      component={AddNoteScreen}
      options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.white,
        title: null,
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default NoteNavigator;
