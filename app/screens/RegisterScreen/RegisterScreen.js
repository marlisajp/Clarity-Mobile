import React from 'react';
import { ImageBackground, Image, View } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import styles from './styles';

const RegisterScreen = (props) => {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.background}
      blurRadius={10}
      source={require('../../assets/background.png')}>
      <View style={styles.loginContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/Register.png')}
        />
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) =>
            console.log(
              'name: ',
              values.name,
              'email:',
              values.email,
              'password:',
              values.password
            )
          }>
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