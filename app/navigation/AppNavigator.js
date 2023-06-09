import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import routes from './routes';
import colors from '../config/colors';
import ToDoScreen from '../screens/ToDo/ToDoScreen';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName={routes.DASHBOARD}
      activeColor={colors.primary}
      inactiveColor={colors.white}
      barStyle={{
        height: 80,
        backgroundColor: colors.dark,
      }}>
      <Tab.Screen
        name={routes.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={30} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name={routes.TODO}
        component={ToDoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='format-list-checks'
              color={color}
              size={30}
            />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={30} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
