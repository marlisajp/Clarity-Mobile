import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import styles from './styles';
import ActivityIndicator from '../../components/ActivityIndicator';

const RegisterScreen = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      await user.reload();
      console.log('User created:', user.displayName);
      setLoading(false);
    } catch (error) {
      console.log('Error signing up:', error.code, error.message);
    }
  };

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        style={styles.background}
        blurRadius={10}
        source={require('../../assets/background.png')}>
        <View style={styles.registerContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/Register.png')}
          />
          <AppForm
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={handleSignUp}>
            <AppFormField
              placeholder='Display Name'
              icon='account'
              autoCapitalize='none'
              autoCorrect={false}
              name='name'
            />
            <AppFormField
              placeholder='Email'
              icon='email'
              autoCapitalize='none'
              autoCorrect={false}
              name='email'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <AppFormField
              placeholder='Password'
              icon='lock'
              autoCapitalize='none'
              autoCorrect={false}
              name='password'
              secureTextEntry
              textContentType='password'
            />
            <SubmitButton title='Register' color='dark' />
          </AppForm>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
