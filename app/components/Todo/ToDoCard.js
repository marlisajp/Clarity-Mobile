import React, { useState, useMemo } from 'react';
import { FlatList, TouchableOpacity, View, Alert } from 'react-native';
import { IconButton, Card, Text, Chip, Menu } from 'react-native-paper';
import { remove, ref } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { getFirebaseDatabase } from '../../../firebaseConfig';
import colors from '../../config/colors';
import styles from './styles';
import routes from '../../navigation/routes';
import useAuth from '../../hooks/useAuth';
import { updateTodoStatus } from '../../functions/update';
import useTodos from '../../hooks/useTodos';

const ToDoCard = ({ id, numberOfLines = 1, style }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const navigation = useNavigation();
  const user = useAuth();
  const { todos } = useTodos(user?.uid);

  const todo = useMemo(() => todos.find((todo) => todo.id === id), [todos, id]);
  const { content, priority, status, dueDate, tags } = todo || {};

  const handleDeleteTodo = async () => {
    try {
      Alert.alert('Delete', 'Are you sure you want to delete this to do?', [
        {
          text: 'Yes',
          onPress: async () => {
            const database = getFirebaseDatabase();
            const todoRef = ref(database, `todos/${user?.uid}/${id}`);
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
    <Card
      mode='elevated'
      elevation={2}
      style={[styles.card, style]}
      onPress={() => navigation.navigate(routes.SINGLETODO)}>
      <Card.Content style={styles.contentContainer}>
        <Text
          style={styles.content}
          variant='headlineSmall'
          numberOfLines={numberOfLines}>
          {content}
        </Text>

        {dueDate ? (
          <Text numberOfLines={1} variant='bodyLarge' style={styles.date}>
            Due: {dueDate}
          </Text>
        ) : (
          <Text numberOfLines={1} variant='bodyLarge' style={styles.date}>
            No Due Date
          </Text>
        )}
        <View style={styles.detailsContainer}>
          <View style={styles.priorityContainer}>
            <Text variant='titleMedium' style={styles.detailHeader}>
              Priority:
            </Text>
            <Text numberOfLines={1} variant='bodyLarge'>
              {priority && priority.label}
            </Text>
          </View>
          <View style={styles.priorityContainer}>
            <Text variant='titleMedium' style={styles.detailHeader}>
              Status:
            </Text>
            <Text numberOfLines={1} variant='bodyLarge'>
              {status && status.label}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Menu
            contentStyle={{
              backgroundColor: colors.light,
              borderWidth: 3,
              borderColor: colors.secondary,
            }}
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <IconButton
                  containerColor={colors.dark}
                  iconColor={colors.white}
                  icon='menu'
                  mode='contained'
                />
              </TouchableOpacity>
            }>
            <Menu.Item
              leadingIcon='run'
              onPress={() => {
                updateTodoStatus(user?.uid, id, 'In Progress');
                closeMenu();
              }}
              title='Start'
            />
            <Menu.Item
              leadingIcon='check-circle'
              onPress={() => {
                updateTodoStatus(user?.uid, id, 'Completed');
                closeMenu();
              }}
              title='Complete'
            />

            <Menu.Item
              leadingIcon='file-edit'
              onPress={() => {
                navigation.navigate(routes.EDITTODO, {
                  id,
                  content,
                  priority,
                  status,
                  tags,
                  dueDate,
                });
                closeMenu();
              }}
              title='Edit todo'
            />
            <Menu.Item
              leadingIcon='delete-forever'
              onPress={() => {
                closeMenu();
                handleDeleteTodo();
              }}
              title='Delete'
            />
          </Menu>
        </View>
        {tags ? (
          <FlatList
            style={styles.tagsContainer}
            data={tags}
            keyExtractor={(tag) => tag}
            renderItem={({ item }) => (
              <Chip
                mode='flat'
                selectedColor={colors.dark}
                compact={true}
                elevated={true}
                style={styles.tag}
                icon='tag'
                onPress={() => console.log('Pressed')}>
                {item}
              </Chip>
            )}
          />
        ) : (
          <Chip mode='outlined' icon='tag-off-outline' />
        )}
      </Card.Content>
    </Card>
  );
};

export default ToDoCard;
