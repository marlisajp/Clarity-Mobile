import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import defaultStyles from '../../config/styles';
import colors from '../../config/colors';
import Icon from '../Icon';

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons = true,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              style={styles.icon}
              name='chevron-right'
              size={30}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    marginRight: 20,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
  },
});

export default ListItem;
