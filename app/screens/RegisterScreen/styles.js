import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderColor: colors.medium,
    borderRadius: 20,
    borderWidth: 2,
    height: 500,
    position: 'absolute',
    width: '80%',
  },
  logo: {
    overflow: 'visible',
    height: 100,
    width: 100,
    marginTop: 40,
  },
});
