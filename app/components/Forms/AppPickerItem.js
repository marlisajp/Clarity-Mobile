import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from '../Icon';

function AppPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={60} />
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    padding: 20,
  },
});

export default AppPickerItem;
