import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, Button, TextInput } from 'react-native-paper';
import {
  getAuth,
  updateProfile,
  updatePassword,
  updateEmail,
  updatePhoneNumber,
} from 'firebase/auth';

import useAuth from '../../hooks/useAuth';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import AppLargeButton from '../../components/Buttons/AppLargeButton';
import colors from '../../config/colors';

const EditProfileScreen = () => {
  const user = useAuth();

  const [displayName, setDisplayName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');

  const handleSave = () => {
    const auth = getAuth();
    if (displayName !== user.displayName) {
      updateProfile(auth.currentUser, { displayName: displayName })
        .then(() => {
          console.log('Profile updated!');
        })
        .catch((error) => {
          console.log('Error occurred: ', error);
        });
    }

    if (email !== user.email) {
      updateEmail(auth.currentUser, email)
        .then(() => {
          console.log('Email updated!');
        })
        .catch((error) => {
          console.log('Error occurred: ', error);
        });
    }

    console.log('Saving new user profile data');
  };

  const handlePasswordChange = () => {
    const auth = getAuth();
    updatePassword(auth.currentUser, password)
      .then(() => {
        console.log('Password updated!');
      })
      .catch((error) => {
        console.log('Error occurred: ', error);
      });
  };

  return (
    <Screen>
      <Header title='Edit Profile' iconName='account-edit' />
      {user && (
        <>
          <DataTable style={styles.container}>
            <DataTable.Header>
              <DataTable.Title textStyle={styles.title}>
                Your Profile
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Name</DataTable.Cell>
              <DataTable.Cell>{user.displayName}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Email</DataTable.Cell>
              <DataTable.Cell>{user.email}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <View style={styles.formContainer}>
            <AppForm
              initialValues={{ name: user.displayName, email: user.email }}
              onSubmit={handleSave}>
              <AppFormField
                icon='account'
                placeholder={'Display Name'}
                value={displayName}
                onChangeText={(name) => setDisplayName(name)}
              />

              <AppFormField
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                placeholder='Email'
                value={email}
                onChangeText={(email) => setEmail(email)}
              />

              <AppFormField
                placeholder='Password'
                icon='lock'
                autoCapitalize='none'
                autoCorrect={false}
                name='password'
                secureTextEntry
                textContentType='password'
                value={password}
                onChangeText={(password) => setPassword(password)}
              />

              <AppLargeButton
                color='dark'
                title='Change Password'
                onPress={handlePasswordChange}>
                Change Password
              </AppLargeButton>

              <SubmitButton title='Save Profile' />
            </AppForm>
          </View>
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  formContainer: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default EditProfileScreen;
