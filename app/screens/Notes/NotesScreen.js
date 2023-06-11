import React from 'react';
import { StyleSheet } from 'react-native';

import ListItem from '../../components/Lists/ListItem';
import ListItemSeparator from '../../components/Lists/ListItemSeparator';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { FlatList } from 'react-native';
import Add from '../../components/Add/Add';

const notes = [
  {
    id: '1',
    title: 'Project Ideas',
    content:
      'Idea 1: A mobile app for tracking diet and exercise. Idea 2: A web platform for connecting local farmers and consumers. Idea 3: A social networking site for book lovers.',
    tags: ['projects', 'ideas', 'work'],
  },
  {
    id: '2',
    title: 'Grocery List',
    content:
      'Apples, Bananas, Oranges, Milk, Bread, Chicken, Rice, Pasta, Cereal, Tea bags',
    tags: ['personal', 'shopping'],
  },
  {
    id: '3',
    title: 'Birthday Party Planning',
    content:
      'Decide on a theme, Make a guest list, Send out invitations, Plan the menu, Arrange for entertainment, Plan activities',
    tags: ['personal', 'events', 'planning'],
  },
  {
    id: '4',
    title: 'Meeting Agenda',
    content:
      'Discuss project updates, Talk about new project ideas, Decide on marketing strategies, Plan for next quarter',
    tags: ['work', 'meetings', 'agenda'],
  },
  {
    id: '5',
    title: 'Books to Read',
    content:
      'To Kill a Mockingbird by Harper Lee, 1984 by George Orwell, Pride and Prejudice by Jane Austen, The Great Gatsby by F. Scott Fitzgerald, Catch-22 by Joseph Heller',
    tags: ['personal', 'books', 'reading'],
  },
];

const NotesScreen = () => {
  return (
    <Screen style={styles.container}>
      <Header title='Notes' iconName='note-text-outline' />
      <Add title='Note' iconName='note-plus-outline' />
      <FlatList
        data={notes}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(note) => note.title}
        renderItem={({ item }) => (
          <ListItem
            // onPress={() => navigation.navigate(item.targetScreen)}
            title={item.title}
            subTitle={item.content}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NotesScreen;
