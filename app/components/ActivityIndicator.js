import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import colors from '../config/colors';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: colors.primary,
    height: '100%',
    opacity: 0.5,
    width: '100%',
    zIndex: 1,
  },
});

export default ActivityIndicator;
