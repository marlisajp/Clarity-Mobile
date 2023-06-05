import React from 'react';
import { ImageBackground, Image, View } from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import styles from './styles';

const RegisterScreen = () => {
  const auth = getAuth();

  const handleSignUp = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      await user.reload();
      console.log('User created:', user.displayName);
    } catch (error) {
      console.log('Error signing up:', error.code, error.message);
    }
  };

  return (
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
  );
};

export default RegisterScreen;
