import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';

import styles from './styles';
import Screen from '../../components/Screen';
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import colors from '../../config/colors';
import routes from '../../navigation/routes';
import TodoForm from '../../components/Todo/TodoForm';
import QuickTodo from '../../components/Todo/QuickTodo';
import useAuth from '../../hooks/useAuth';
import useQuote from '../../hooks/useQuote';

const cards = [
  {
    id: 1,
    title: 'To-Dos',
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
  const [visible, setVisible] = useState(false);

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
            latest={item.latest}
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
