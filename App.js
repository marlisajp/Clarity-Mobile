import app from './firebaseConfig';
app();

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import DashboardScreen from './app/screens/DashboardScreen/DashboardScreen';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
