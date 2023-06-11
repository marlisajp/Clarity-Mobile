import React from 'react';
import { FlatList, TouchableOpacity, View, Alert } from 'react-native';
import { IconButton, Card, Text, Chip } from 'react-native-paper';
import { remove, ref } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { getFirebaseDatabase } from '../../../firebaseConfig';
import colors from '../../config/colors';
import styles from './styles';
import routes from '../../navigation/routes';

const ToDoCard = ({
  id,
  content,
  priority,
  completed,
  dueDate,
  tags,
  numberOfLines = 1,
  style,
}) => {
  const navigation = useNavigation();
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
              {priority}
            </Text>
          </View>
          <View style={styles.priorityContainer}>
            <Text variant='titleMedium' style={styles.detailHeader}>
              Status:
            </Text>
            <Text numberOfLines={1} variant='bodyLarge'>
              {completed ? 'Completed' : 'Not Complete'}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <IconButton
              containerColor={colors.orange}
              iconColor={colors.white}
              icon='reload'
              mode='outlined'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconButton
              containerColor={colors.green}
              iconColor={colors.white}
              icon='checkbox-marked'
              mode='outlined'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconButton
              containerColor={colors.yellow}
              iconColor={colors.black}
              icon='file-document-edit-outline'
              mode='outlined'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteTodo}>
            <IconButton
              containerColor={colors.danger}
              iconColor={colors.white}
              icon='delete-forever'
              mode='outlined'
            />
          </TouchableOpacity>
        </View>
        {tags && (
          <FlatList
            style={styles.tagsContainer}
            data={tags}
            keyExtractor={(tag) => tag}
            renderItem={({ item }) => (
              <Chip
                elevated={true}
                style={styles.tag}
                icon='tag'
                onPress={() => console.log('Pressed')}>
                {item}
              </Chip>
            )}
          />
        )}
      </Card.Content>
    </Card>
  );
};

export default ToDoCard;
