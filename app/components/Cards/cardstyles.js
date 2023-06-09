import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  card: {
    marginBottom: 20,
    height: 230,
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
    height: 150,
    width: '100%',
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 7,
  },
});
