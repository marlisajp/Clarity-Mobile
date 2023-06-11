import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import TodoForm from '../components/Todo/TodoForm';
import ToDoScreen from '../screens/ToDo/ToDoScreen';
import SingleToDoScreen from '../screens/ToDo/SingleToDoScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const TodoNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.TODO}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.TODO} component={ToDoScreen} />
    <Stack.Screen
      name={routes.ADDTODO}
      component={TodoForm}
      options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.white,
        title: null,
      }}
    />
    <Stack.Screen name={routes.SINGLETODO} component={SingleToDoScreen} />
  </Stack.Navigator>
);

export default TodoNavigator;
