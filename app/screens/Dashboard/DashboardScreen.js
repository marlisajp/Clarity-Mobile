import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';

import styles from './styles';
import Screen from '../../components/Screen';
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import routes from '../../navigation/routes';
import QuickTodo from '../../components/Todo/QuickTodo';
import useAuth from '../../hooks/useAuth';
import useQuote from '../../hooks/useQuote';
import useTodos from '../../hooks/useTodos';
import useNotes from '../../hooks/useNotes';

const cards = [
  {
    id: 1,
    title: 'To Dos',
    latest: 'do laundry',
    image: require('../../assets/cards/todo.jpg'),
    routeName: 'TODO',
  },
  {
    id: 2,
    title: 'Notes',
    latest: 'portfolio ideas! blah blah',
    image: require('../../assets/cards/notecard.jpg'),
    routeName: 'NOTE',
  },
  {
    id: 3,
    title: 'Calendar',
    latest: 'June 6th, Appointment',
    image: require('../../assets/cards/calendar.jpg'),
    routeName: 'CALENDAR',
  },
];

const DashboardScreen = ({ navigation }) => {
  const user = useAuth();
  const uid = user?.uid;
  const [visible, setVisible] = useState(false);

  const { todos } = useTodos(uid);
  let currentTodo = '';

  if (todos && todos.length > 0) {
    currentTodo = todos[todos.length - 1].content;
    console.log('current todo', currentTodo);
  }

  const { notes } = useNotes(uid);
  let currentNote = '';

  if (notes && notes.length > 0) {
    currentNote = notes[notes.length - 1].title;
    console.log('current note', currentNote);
  }

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const quote = useQuote();

  return (
    <Screen>
      {user && (
        <Header
          title={`Welcome, ${user.displayName}`}
          iconName='home'
          titleSize={30}
        />
      )}
      <View style={styles.quoteContainer}>
        <DashboardCard showButton={false} quote={quote} useQuoteImage={true} />
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={cards}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <DashboardCard
            onPress={() => navigation.navigate(routes[item.routeName])}
            title={item.title}
            latestTodo={currentTodo}
            latestNote={currentNote}
            image={item.image}
            openModal={showModal}
          />
        )}
      />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={styles.modalContainer}>
            <QuickTodo />
            <Button onPress={hideModal}>Cancel</Button>
          </View>
        </Modal>
      </Portal>
    </Screen>
  );
};

export default DashboardScreen;
