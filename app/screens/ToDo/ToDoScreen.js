// ToDoScreen.js
import React from 'react';
import { FlatList, Text } from 'react-native';

import Screen from '../../components/Screen';
import ToDoCard from '../../components/Todo/ToDoCard';
import styles from '../../components/Todo/styles';
import Header from '../../components/Header';
import Add from '../../components/Add/Add';
import ActivityIndicator from '../../components/ActivityIndicator';
import routes from '../../navigation/routes';
import useAuth from '../../hooks/useAuth';
import useTodos from '../../hooks/useTodos';

const ToDoScreen = ({ navigation }) => {
  const user = useAuth();
  const { todos, loading } = useTodos(user?.uid);

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <Screen>
      <Header title="To Do's" iconName='format-list-checks' iconSize={50} />
      <Add
        onPress={() => navigation.navigate(routes.ADDTODO)}
        title='To Do'
        iconName='playlist-plus'
      />
      {todos.length > 0 ? (
        <FlatList
          scrollsToTop={true}
          contentContainerStyle={styles.list}
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ToDoCard
              id={item.id}
              // content={item.content}
              // status={item.status ? item.status.label : 'Not Started'}
              // dueDate={item.dueDate}
              // priority={item.priority ? item.priority.label : 'Low'}
              // tags={item.tags}
            />
          )}
        />
      ) : (
        <Text>No Todo's Created</Text>
      )}
    </Screen>
  );
};

export default ToDoScreen;
