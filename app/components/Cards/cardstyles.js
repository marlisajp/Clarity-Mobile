import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  card: {
    marginBottom: 20,
    height: 210,
  },

  detailsContainer: {
    padding: -50,
  },

  iconContainer: {
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  image: {
    height: 130,
    width: '100%',
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
});
