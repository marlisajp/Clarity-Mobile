import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { ref, remove } from 'firebase/database';

import ListItem from '../../components/Lists/ListItem';
import ListItemSeparator from '../../components/Lists/ListItemSeparator';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { FlatList } from 'react-native';
import Add from '../../components/Add/Add';
import routes from '../../navigation/routes';
import useAuth from '../../hooks/useAuth';
import useNotes from '../../hooks/useNotes';
import ActivityIndicator from '../../components/ActivityIndicator';
import ListItemAction from '../../components/Lists/ListItemAction';
import { getFirebaseDatabase } from '../../../firebaseConfig';

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

const NotesScreen = ({ navigation }) => {
  const user = useAuth();
  const { notes, loading } = useNotes(user?.uid);

  const handleDeleteNote = (id) => {
    try {
      Alert.alert('Delete', 'Are you sure you want to delete this note?', [
        {
          text: 'Yes',
          onPress: async () => {
            const database = getFirebaseDatabase();
            const notesRef = ref(database, `notes/${user?.uid}/${id}`);
            await remove(notesRef);
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

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <Screen style={styles.container}>
      <Header title='Notes' iconName='note-text-outline' />
      <Add
        title='Note'
        iconName='note-plus-outline'
        onPress={() => navigation.navigate(routes.ADDNOTE)}
      />
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(note) => note.title}
          renderItem={({ item }) => (
            <ListItem
              // onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              subTitle={item.content}
              renderRightActions={() => (
                <ListItemAction onPress={() => handleDeleteNote(item.id)} />
              )}
            />
          )}
        />
      ) : (
        <Text>No Notes Created</Text>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NotesScreen;
