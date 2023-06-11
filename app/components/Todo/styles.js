import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: colors.light,
    height: 240,
    marginBottom: 15,
    width: '90%',
  },
  container: {
    padding: 20,
  },
  content: {
    marginTop: 12,
  },
  contentContainer: {
    height: '100%',

    justifyContent: 'space-around',
  },
  date: {
    position: 'absolute',
    right: 10,
    textAlign: 'right',
    top: 5,
    width: '100%',
  },
  detailsContainer: {
    backgroundColor: colors.primaryTransparent,
    borderWidth: 2,
    borderColor: colors.medium,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailHeader: {
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  priority: {},
  tag: {
    marginRight: 10,
    height: 29,
  },
  priorityContainer: {
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
});
