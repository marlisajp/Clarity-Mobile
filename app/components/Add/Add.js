import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import colors from '../../config/colors';

const Add = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Add {title}</Text>
        <Icon name={iconName} size={30} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 6,
    width: '90%',
  },
  text: {
    color: colors.white,
    fontSize: 20,
    marginRight: 10,
  },
});

export default Add;
