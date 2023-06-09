import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    alignSelf: 'center',
    height: 170,
    marginBottom: 20,
    width: '90%',
  },
  container: {
    padding: 20,
  },
  contentContainer: {
    height: '100%',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    width: '100%',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
