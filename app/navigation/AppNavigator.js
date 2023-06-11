import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import ToDoScreen from '../screens/ToDo/ToDoScreen';
import NotesScreen from '../screens/Notes/NotesScreen';
import routes from './routes';
import colors from '../config/colors';
import TodoNavigator from './TodoNavigator';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import AccountNavigator from './AccountNavigator';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = (props) => {
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      inactiveColor={colors.white}
      labeled={false}
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
        component={TodoNavigator}
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
        name={routes.NOTE}
        component={NotesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='note-text-outline'
              color={color}
              size={30}
            />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name={routes.CALENDAR}
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='calendar-today'
              color={color}
              size={30}
            />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
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
