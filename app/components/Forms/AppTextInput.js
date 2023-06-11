import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';

const AppTextInput = ({
  maxLength,
  icon,
  width = '95%',
  numberOfLines = 1,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        multiline
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        placeholderTextColor={defaultStyles.colors.medium}
        style={[
          defaultStyles.text,
          { paddingRight: 15, height: numberOfLines * 20 },
        ]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
