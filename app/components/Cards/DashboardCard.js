import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { IconButton, Avatar, Button, Card, Text } from 'react-native-paper';

import styles from './cardstyles';
import colors from '../../config/colors';

const DashboardCard = ({
  title,
  date,
  latest,
  image,
  onPress,
  openModal,
  showButton = true,
  quote,
  useQuoteImage = false,
}) => {
  return (
    <Card mode='elevated' elevation={1} style={styles.card}>
      {useQuoteImage ? (
        <TouchableWithoutFeedback onPress={onPress}>
          <Card.Cover
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200' }}
            // source={require('../../assets/cards/3.png')}
          />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={onPress}>
          <Card.Cover style={styles.image} source={image} />
        </TouchableWithoutFeedback>
      )}
      {!image && (
        <Card.Content>
          <View style={styles.smallQuoteContainer}>
            <Text variant='bodyMedium'>{quote}</Text>
          </View>
        </Card.Content>
      )}

      <Card.Content>
        {title && (
          <Text style={styles.title} variant='headlineMedium'>
            {title}
          </Text>
        )}
        {date && (
          <Text style={styles.subTitle} numberOfLines={1} variant='bodyLarge'>
            {date}
          </Text>
        )}
        <Text style={styles.subTitle} numberOfLines={1} variant='bodyLarge'>
          {latest}
        </Text>
      </Card.Content>
      {showButton && (
        <View style={styles.iconContainer}>
          <IconButton
            containerColor={colors.primary}
            iconColor={colors.white}
            icon='plus-thick'
            mode='contained'
            onPress={openModal}
          />
        </View>
      )}
    </Card>
  );
};

export default DashboardCard;
