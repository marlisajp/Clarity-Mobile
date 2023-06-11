import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import EditProfileScreen from '../screens/Account/EditProfileScreen';
import AccountScreen from '../screens/Account/AccountScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.ACCOUNTMAINSCREEN}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ACCOUNTMAINSCREEN} component={AccountScreen} />
    <Stack.Screen name={routes.EDITPROFILE} component={EditProfileScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default AccountNavigator;
