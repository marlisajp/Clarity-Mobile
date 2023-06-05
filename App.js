import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
