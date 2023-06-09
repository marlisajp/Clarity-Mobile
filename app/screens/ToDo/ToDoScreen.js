import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../../components/Screen';
import ToDoCard from '../../components/Todo/ToDoCard';
import styles from '../../components/Todo/styles';
import Header from '../../components/Header';
import colors from '../../config/colors';

const todos = [
  {
    id: 1,
    content: 'Complete project report',
    priority: 'high',
    completed: false,
    dueDate: '2023-06-15',
    tags: ['work', 'reports'],
  },
  {
    id: 2,
    content: 'Grocery shopping',
    priority: 'low',
    completed: true,
    dueDate: '2023-06-07',
    tags: ['personal', 'shopping'],
  },
  {
    id: 3,
    content: 'Gym at 5 PM',
    priority: 'medium',
    completed: false,
    dueDate: '2023-06-06',
    tags: ['personal', 'health'],
  },
  {
    id: 4,
    content: 'Schedule meeting with team',
    priority: 'high',
    completed: false,
    dueDate: '2023-06-08',
    tags: ['work', 'meetings'],
  },
  {
    id: 5,
    content: 'Buy birthday gift for John',
    priority: 'medium',
    completed: false,
    dueDate: '2023-06-20',
    tags: ['personal', 'events'],
  },
];

const ToDoScreen = () => {
  return (
    <Screen>
      <Header
        title="To Do's"
        iconName='format-list-checks'
        iconSize={50}
        iconColor={colors.primary}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <ToDoCard
            content={item.content}
            priority={item.priority}
            completed={item.completed}
            dueDate={item.dueDate}
            tags={item.tags}
          />
        )}
      />
    </Screen>
  );
};

export default ToDoScreen;
