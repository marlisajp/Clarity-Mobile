import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ref, push } from 'firebase/database';

import { getFirebaseDatabase } from '../../../firebaseConfig';
import { AppForm, AppFormField, SubmitButton } from '../Forms';
import Screen from '../Screen';
import Header from '../Header';
import AppFormPicker from '../Forms/AppFormPicker';
import AppPickerItem from '../Forms/AppPickerItem';
import colors from '../../config/colors';
import routes from '../../navigation/routes';
import useAuth from '../../hooks/useAuth';

const statusItems = [
  {
    label: 'Not Started',
    value: 'not-started',
    icon: 'alert-octagon',
  },
  {
    label: 'In Progress',
    value: 'in-progress',
    icon: 'timer-sand',
  },
  {
    label: 'Completed',
    value: 'completed',
    icon: 'check-circle',
  },
];

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

const TodoForm = ({ navigation }) => {
  const [status, setStatus] = useState();
  const user = useAuth();

  const createTodo = async (todo, { resetForm }) => {
    todo.tags = todo.tags.split(',').map((tag) => tag.trim());
    const database = getFirebaseDatabase();
    const todosRef = ref(database, 'todos');
    await push(todosRef, { ...todo, uid: user.uid });
    resetForm();
    navigation.navigate(routes.TODO);
  };

  return (
    <Screen style={styles.container}>
      <Header title='Create To Do' iconName='playlist-edit' />
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            content: '',
            priority: '',
            status: '',
            dueDate: '',
            tags: [],
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

          <AppFormField
            placeholder='Due Date'
            icon='calendar'
            autoCapitalize='none'
            autoCorrect={false}
            name='dueDate'
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
          <AppFormPicker
            icon='list-status'
            items={statusItems}
            name='status'
            placeholder='Status'
            numberOfColumns={3}
            width='50%'
            PickerItemComponent={AppPickerItem}
          />
          <AppFormField
            placeholder='Tags (comma-separated) '
            icon='tag-plus'
            autoCapitalize='none'
            autoCorrect={false}
            name='tags'
          />
          <SubmitButton title='Create To Do' color='dark' />
        </AppForm>
        <Button
          title='Cancel'
          color={colors.dark}
          onPress={() => navigation.navigate(routes.TODO)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
});

export default TodoForm;
