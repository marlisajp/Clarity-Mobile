import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const Icon = ({ name, size, color }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Icon;
