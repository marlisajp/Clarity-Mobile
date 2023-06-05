import { Platform } from 'react-native';
import { useFonts } from 'expo-font';

import colors from './colors';

export default {
  colors,
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
