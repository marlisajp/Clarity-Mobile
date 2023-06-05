import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';

import AppLargeButton from '../../components/Buttons/AppLargeButton';
import styles from './WelcomeScreenStyles';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.background}
      blurRadius={7}
      source={require('../../assets/background.png')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/icon.png')} />
        <Text style={styles.tagLine}>Stay Clear in a Cloudy World</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppLargeButton title='Log In' />
        <AppLargeButton title='Register' color='dark' />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
