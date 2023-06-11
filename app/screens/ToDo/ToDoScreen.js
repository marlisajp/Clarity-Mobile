import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { ref, onValue } from 'firebase/database';

import Screen from '../../components/Screen';
import ToDoCard from '../../components/Todo/ToDoCard';
import styles from '../../components/Todo/styles';
import Header from '../../components/Header';
import Add from '../../components/Add/Add';
import routes from '../../navigation/routes';
import { getFirebaseDatabase } from '../../../firebaseConfig';
import useAuth from '../../hooks/useAuth';

const ToDoScreen = ({ navigation }) => {
  const [todos, setTodos] = useState({});
  const user = useAuth();
  console.log('user in todoscreen', user);

  useEffect(() => {
    if (!user) {
      return;
    }

    const database = getFirebaseDatabase();
    const todosRef = ref(database, 'todos');

    const unsubscribe = onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      const todosArray = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));

      const userTodos = todosArray.filter((todo) => todo.uid === user.uid);
      setTodos(userTodos);
    });

    return () => unsubscribe();
  }, [user?.uid]);

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
              content={item.content}
              completed={item.completed}
              dueDate={item.dueDate}
              priority={item.priority.label}
              tags={item.tags}
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
