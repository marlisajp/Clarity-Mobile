import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ref, push } from 'firebase/database';

import { AppForm, AppFormField, AppTextInput, SubmitButton } from '../Forms';
import AppFormPicker from '../Forms/AppFormPicker';
import AppPickerItem from '../Forms/AppPickerItem';
import { getFirebaseDatabase } from '../../../firebaseConfig';
import Header from '../Header';

const priorityItems = [
  {
    label: 'High',
    value: 'high',
    icon: 'alert-octagram',
  },
  {
    label: 'Medium',
    value: 'med',
    icon: 'speedometer-medium',
  },
  {
    label: 'Low',
    value: 'low',
    icon: 'bed',
  },
];

const QuickTodo = (props) => {
  const createTodo = async (todo) => {
    const database = getFirebaseDatabase();
    const todosRef = ref(database, 'todos');
    await push(todosRef, todo);
  };
  return (
    <View style={styles.container}>
      {/* <Header title='Quick To Do' iconName='playlist-edit' /> */}
      <AppForm
        initialValues={{
          content: '',
          priority: '',
        }}
        onSubmit={createTodo}>
        <AppFormField
          placeholder='To Do'
          icon='playlist-edit'
          autoCapitalize='none'
          autoCorrect={false}
          name='content'
          maxLength={55}
        />

        {/* <DatePickerComponent /> */}
        <AppFormPicker
          icon='priority-high'
          items={priorityItems}
          name='priority'
          placeholder='Priority'
          numberOfColumns={3}
          width='50%'
          PickerItemComponent={AppPickerItem}
        />

        <SubmitButton title='Create To Do' color='dark' />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});

export default QuickTodo;
