import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  CalendarProvider,
  ExpandableCalendar,
  AgendaList,
} from 'react-native-calendars';

import ListItem from '../../components/Lists/ListItem';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import Add from '../../components/Add/Add';
import colors from '../../config/colors';

const CalendarScreen = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleDateChanged = (date) => {
    setSelectedDate(date);
  };

  // Dummy agenda data
  const items = {
    '2023-06-16': [{ name: 'item 1 - any js object' }],
    '2023-06-17': [{ name: 'item 2 - any js object', height: 80 }],
    '2023-06-18': [
      { name: 'item 3 - any js object' },
      { name: 'any js object' },
    ],
    '2023-06-19': [
      { name: 'item 4 - any js object' },
      { name: 'any js object' },
    ],
    '2023-06-20': [
      { name: 'item 5 - any js object' },
      { name: 'any js object' },
    ],
    '2023-06-21': [
      { name: 'item 6 - any js object' },
      { name: 'any js object' },
    ],
    '2023-06-22': [
      { name: 'item 7 - any js object' },
      { name: 'any js object' },
    ],
  };

  const sections = Object.keys(items).map((key) => ({
    title: key,
    data: items[key],
  }));

  return (
    <Screen style={styles.container}>
      <Header title='Calendar' iconName='calendar-today' />
      <Add title='Event' iconName='calendar-plus' />
      <CalendarProvider
        showTodayButton={true}
        date={selectedDate}
        onDateChanged={handleDateChanged}>
        <ExpandableCalendar
          style={styles.calendar}
          initialPosition='closed'
          allowShadow={true}
        />
        <View style={styles.sectionsContainer}>
          <AgendaList
            sectionStyle={styles.sections}
            markToday={true}
            sections={sections}
            renderItem={({ item, firstItemInDay }) => {
              if (!item) return null;
              return <ListItem subTitle={item.name} />;
            }}
          />
        </View>
      </CalendarProvider>
    </Screen>
  );
  c;
};

const styles = StyleSheet.create({
  sectionsContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  item: {
    padding: 10,
    backgroundColor: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sections: {
    backgroundColor: colors.medium,
    color: 'white',
  },
});

export default CalendarScreen;
