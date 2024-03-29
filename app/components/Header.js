import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Icon from './Icon';
import colors from '../config/colors';

const Header = ({
  title,
  titleSize = 40,
  iconName,
  iconSize = 50,
  iconColor = colors.white,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={[styles.text, { fontSize: titleSize }]}>{title}</Text>
        <View style={styles.icon}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.dark,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontWeight: 700,
    fontFamily: 'Gill Sans',
    marginLeft: 15,
  },
});

export default Header;
