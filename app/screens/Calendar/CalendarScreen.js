import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import {
  CalendarProvider,
  ExpandableCalendar,
  AgendaList,
} from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import ListItem from '../../components/Lists/ListItem';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import Add from '../../components/Add/Add';
import colors from '../../config/colors';
import { createEvent } from '../../functions/create';
import useEvents from '../../hooks/useEvents';
import useAuth from '../../hooks/useAuth';
import ActivityIndicator from '../../components/ActivityIndicator';

const CalendarScreen = ({ navigation }) => {
  const [items, setItems] = useState({
    '2023-06-16': [{ name: 'item 1 - any js object' }],
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [newEventName, setNewEventName] = useState('');
  const [newEventDate, setNewEventDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const user = useAuth();
  const { events, loading } = useEvents(user?.uid);

  useEffect(() => {
    const newItems = {};

    events.forEach((event) => {
      const date = event.date;
      if (!newItems[date]) {
        newItems[date] = [];
      }
      newItems[date].push(event.event);
    });

    setItems(newItems);
  }, [events]);

  const handleAddEvent = async () => {
    const eventDate = newEventDate.toISOString().split('T')[0];
    const newEvent = {
      date: eventDate,
      event: {
        name: newEventName,
      },
    };
    await createEvent(newEvent, user, navigation);
    setModalVisible(false);
    setNewEventName('');
    setNewEventDate(new Date());
  };

  const createMarkedDates = () => {
    let marked = {};
    Object.keys(items).forEach((date) => {
      marked[date] = { marked: true };
    });
    return marked;
  };

  const handleAddButtonPressed = () => {
    setModalVisible(true);
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleDateChanged = (date) => {
    setSelectedDate(date);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || newEventDate;
    setDatePickerVisible(Platform.OS === 'ios');
    setNewEventDate(currentDate);
  };

  const sections = Object.keys(items).map((key) => ({
    title: key,
    data: items[key],
  }));

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <Screen style={styles.container}>
      <Header title='Calendar' iconName='calendar-today' />
      <Add
        title='Event'
        iconName='calendar-plus'
        onPress={handleAddButtonPressed}
      />
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        backdropColor={colors.light}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Event:</Text>
          <TextInput
            style={styles.input}
            value={newEventName}
            onChangeText={setNewEventName}
          />
          <Button
            onPress={() => setDatePickerVisible(true)}
            title='Select Date'
          />
          {isDatePickerVisible && (
            <DateTimePicker
              testID='dateTimePicker'
              value={newEventDate}
              mode={'date'}
              display='default'
              onChange={onChange}
              onTouchCancel={() => setDatePickerVisible(false)}
            />
          )}
          <Button title='Add Event' onPress={handleAddEvent} />
          <Button title='Cancel' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <CalendarProvider
        showTodayButton={true}
        date={selectedDate}
        onDateChanged={handleDateChanged}>
        <ExpandableCalendar
          style={styles.calendar}
          initialPosition='closed'
          allowShadow={true}
          markedDates={createMarkedDates()}
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: colors.medium,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default CalendarScreen;
