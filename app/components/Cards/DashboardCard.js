import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { IconButton, Avatar, Button, Card, Text } from 'react-native-paper';

import styles from './cardstyles';
import colors from '../../config/colors';

const DashboardCard = ({ title, latest, image, onPress }) => {
  return (
    <Card mode='elevated' elevation={1} style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Card.Cover style={styles.image} source={image} />
      </TouchableWithoutFeedback>
      <Card.Content>
        <Text style={styles.title} variant='headlineMedium'>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1} variant='bodyLarge'>
          {latest}
        </Text>
      </Card.Content>
      <View style={styles.iconContainer}>
        <IconButton
          containerColor={colors.primary}
          iconColor={colors.white}
          icon='plus-thick'
          mode='contained'
          onPress={onPress}
        />
      </View>
    </Card>
  );
};

export default DashboardCard;
