import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  modalContainer: {
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  quoteContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    backgroundColor: colors.white,
  },
});
