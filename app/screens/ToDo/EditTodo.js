import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppPickerItem,
} from '../../components/Forms';
import { useRoute } from '@react-navigation/native';
import { updateTodo } from '../../functions/update';
import useAuth from '../../hooks/useAuth';
import ActivityIndicator from '../../components/ActivityIndicator';
import useTodos from '../../hooks/useTodos';

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

const EditTodo = ({ navigation }) => {
  const route = useRoute();
  const user = useAuth();
  const [loading, setLoading] = useState(false);
  const { id, content, priority, status, tags, dueDate } = route.params;
  const { todos } = useTodos(user?.uid);

  const handleUpdateTodo = async (values, { resetForm }) => {
    setLoading(true);
    const { content, priority, status, dueDate, tags } = values;
    const newTags = tags ? tags.split(', ').map((tag) => tag.trim()) : [];
    await updateTodo(user.uid, id, content, priority, status, dueDate, newTags);
    setLoading(false);
    resetForm();
    navigation.goBack();
  };

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <Screen style={styles.container}>
      <Header title='Edit Todo' iconName='note-edit' />
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            content: content || '',
            priority: priority || '',
            status: status || '',
            dueDate: dueDate || '',
            tags: tags ? tags.join(', ') : '',
          }}
          onSubmit={handleUpdateTodo}>
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
          <SubmitButton title='Update To Do' color='dark' />
        </AppForm>
        <Button title='Cancel' onPress={() => navigation.goBack()} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    padding: 10,
  },
});

export default EditTodo;
