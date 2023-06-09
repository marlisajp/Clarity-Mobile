import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';
import Screen from '../../components/Screen';
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import colors from '../../config/colors';

const cards = [
  {
    id: 1,
    title: 'To-Dos',
    latest: 'do laundry',
    image: require('../../assets/cards/todo.jpg'),
  },
  {
    id: 2,
    title: 'Notes',
    latest: 'portfolio ideas! blah blah',
    image: require('../../assets/cards/notecard.jpg'),
  },
  {
    id: 3,
    title: 'Calendar',
    latest: 'June 6th, Appointment',
    image: require('../../assets/cards/calendar.jpg'),
  },
  {
    id: 4,
    title: 'Calendar',
    latest: 'June 6th, Appointment',
    image: require('../../assets/cards/calendar.jpg'),
  },
  {
    id: 5,
    title: 'Calendar',
    latest: 'June 6th, Appointment',
    image: require('../../assets/cards/calendar.jpg'),
  },
];

const DashboardScreen = () => {
  return (
    <Screen>
      <Header title='Dashboard' iconName='home' iconColor={colors.primary} />
      <FlatList
        contentContainerStyle={styles.container}
        data={cards}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <DashboardCard
            title={item.title}
            latest={item.latest}
            image={item.image}
            onPress={() => console.log(`${item.title} was clicked`)}
          />
        )}
      />
    </Screen>
  );
};

export default DashboardScreen;
