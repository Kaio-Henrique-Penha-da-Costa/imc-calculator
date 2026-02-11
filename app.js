import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/styles/globalStyles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <AppNavigator />
    </>
  );
}
