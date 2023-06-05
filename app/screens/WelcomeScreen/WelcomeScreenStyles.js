import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 50,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagLine: {
    top: -70,
    fontSize: 20,
    color: colors.dark,
  },
});
