import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 3,
    right: 5,
    zIndex: 1,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: colors.light,
    height: 180,
    marginBottom: 15,
    width: '90%',
  },
  container: {
    padding: 20,
  },
  content: {
    marginTop: 8,
  },
  contentContainer: {
    height: '100%',
    justifyContent: 'space-around',
  },
  date: {
    position: 'absolute',
    right: 10,
    textAlign: 'right',
    top: 3,
    width: '100%',
  },
  detailsContainer: {
    backgroundColor: colors.primaryTransparent,
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailHeader: {
    fontWeight: 'bold',
    color: colors.dark,
  },
  list: {
    width: '100%',
  },
  priority: {},
  tag: {
    marginRight: 10,
    backgroundColor: colors.light,
  },
  priorityContainer: {
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
});
