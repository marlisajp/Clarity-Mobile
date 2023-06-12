import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './LoginScreenStyles';
import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import ActivityIndicator from '../../components/ActivityIndicator';

const LoginScreen = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async ({ email, password }) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('User logged in:', user.displayName);
      setLoading(false);
    } catch (error) {
      console.log('Error signing in:', error.code, error.message);
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
        <View style={styles.loginContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/Login.png')}
          />
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
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
