import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import colors from '../../config/colors';
import styles from './ButtonStyles';
import defaultStyles from '../../config/styles';

const AppLargeButton = ({ title, color = 'primary', onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppLargeButton;
