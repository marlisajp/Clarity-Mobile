import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../../config/colors';
import styles from './ButtonStyles';

const AppSmallButton = ({ title, color = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width: '40%' }]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppSmallButton;
