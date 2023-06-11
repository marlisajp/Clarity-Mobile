import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import { createNote } from '../../functions/create';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import ActivityIndicator from '../../components/ActivityIndicator';

const AddNoteScreen = ({ navigation }) => {
  const user = useAuth();
  const [loading, setLoading] = useState(false);

  const handleCreateNote = async (values, { resetForm }) => {
    setLoading(true);
    await createNote(values, resetForm, user, navigation);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <Screen style={styles.container}>
      <Header title='Add Note' iconName='note-plus' />
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ title: '', content: '', tags: [] }}
          onSubmit={handleCreateNote}>
          <AppFormField
            placeholder='Title'
            icon='format-title'
            autoCapitalize='none'
            autoCorrect={false}
            name='title'
            maxLength={55}
          />
          <AppFormField
            placeholder='Content'
            icon='note-plus-outline'
            autoCapitalize='none'
            autoCorrect={false}
            name='content'
            numberOfLines={4}
          />
          <AppFormField
            placeholder='Tags (comma-separated)'
            icon='tag'
            name='tags'
          />
          <SubmitButton title='Create Note' color='primary' />
        </AppForm>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddNoteScreen;
