import React from 'react';
import { View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Card, Button, Icon, Text } from '@rneui/themed';
import { IconButton } from 'react-native-paper';

import { getFirebaseDatabase } from '../../../firebaseConfig';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import styles from './singletodostyles';
import colors from '../../config/colors';
import ToDoCard from '../../components/Todo/ToDoCard';

const todo = {
  id: 1,
  content:
    'Do Laundry really long todo like super duper duper long hellooooooooo',
  priority: 'High',
  completed: false,
  dueDate: 'June 10th, 2023',
  tags: ['work', 'project'],
};

const SingleToDoScreen = () => {
  const handleDeleteTodo = async () => {
    try {
      Alert.alert('Delete', 'Are you sure you want to delete this to do?', [
        {
          text: 'Yes',
          onPress: async () => {
            const database = getFirebaseDatabase();
            const todoRef = ref(database, `todos/${id}`);
            await remove(todoRef);
          },
        },
        {
          text: 'No',
        },
      ]);
    } catch (error) {
      console.log('Failed to delete todo: ', error);
    }
  };

  return (
    <Screen>
      <Header title='Your To Do' iconName='file-edit' />
      <View style={styles.cardContainer}>
        <ToDoCard
          completed={todo.completed}
          content={todo.content}
          numberOfLines={3}
          dueDate={todo.dueDate}
          priority={todo.priority}
          tags={todo.tags}
          style={{ height: 350 }}
        />
      </View>
    </Screen>
  );
};

export default SingleToDoScreen;
