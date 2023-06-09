import React from 'react';
import { FlatList, View } from 'react-native';
import { IconButton, Card, Text, Chip } from 'react-native-paper';

import colors from '../../config/colors';
import styles from './styles';

const ToDoCard = ({ content, priority, completed, dueDate, tags }) => {
  return (
    <Card mode='elevated' elevation={1} style={styles.card}>
      <Card.Content style={styles.contentContainer}>
        <Text variant='headlineMedium'>{content}</Text>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} variant='bodyLarge'>
            {priority}
          </Text>
          <Text numberOfLines={1} variant='bodyLarge'>
            {completed ? <Text>Completed</Text> : <Text>Not Complete</Text>}
          </Text>
          <Text numberOfLines={1} variant='bodyLarge'>
            {dueDate}
          </Text>
        </View>
        <FlatList
          style={styles.tagsContainer}
          data={tags}
          keyExtractor={(tag) => tag}
          renderItem={({ item }) => (
            <Chip
              style={{
                width: 135,
              }}
              icon='information'
              onPress={() => console.log('Pressed')}>
              {item}
            </Chip>
          )}
        />
        <View style={styles.buttonContainer}>
          <IconButton
            containerColor={colors.green}
            iconColor={colors.white}
            icon='checkbox-marked'
            mode='contained'
          />
          <IconButton
            containerColor={colors.danger}
            iconColor={colors.white}
            icon='delete-forever'
            mode='contained'
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ToDoCard;
