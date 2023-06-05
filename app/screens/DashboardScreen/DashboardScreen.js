import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Screen from '../../components/Screen';

const DashboardScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>HELLO</Text>
    </Screen>
  );
};

export default DashboardScreen;
