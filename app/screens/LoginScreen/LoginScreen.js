import React from 'react';
import {
  ImageBackground,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './LoginScreenStyles';
import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';

const LoginScreen = () => {
  const auth = getAuth();

  const handleSignIn = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('User logged in:', user.displayName);
    } catch (error) {
      console.log('Error signing in:', error.code, error.message);
    }
  };

  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.background}
      blurRadius={10}
      source={require('../../assets/background.png')}>
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('../../assets/Login.png')} />
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSignIn}>
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
          <SubmitButton title='Log In' color='dark' />
        </AppForm>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
