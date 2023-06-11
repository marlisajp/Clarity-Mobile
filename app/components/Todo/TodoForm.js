import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ActivityIndicator from '../ActivityIndicator';
import Screen from '../Screen';
import Header from '../Header';
import useAuth from '../../hooks/useAuth';
import { createTodo } from '../../functions/create';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppPickerItem,
} from '../Forms';

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
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  const handleCreateTodo = async (values, { resetForm }) => {
    setLoading(true);
    await createTodo(values, resetForm, user, navigation);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator visible={true} />;

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
          onSubmit={handleCreateTodo}>
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
