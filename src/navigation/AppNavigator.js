import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, TouchableOpacity } from 'react-native';
import { colors } from '../styles/globalStyles';

import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const showInfo = () => {
    Alert.alert('Calculadora IMC', 'Versão 1.0.0\nDesenvolvido para aprendizado');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Calculadora IMC',
            headerRight: () => (
              <>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate('Sobre')}
                >
                  <MaterialIcons name="info" size={24} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={showInfo}
                >
                  <MaterialIcons name="help" size={24} color={colors.white} />
                </TouchableOpacity>
              </>
            ),
          })}
        />
        <Stack.Screen
          name="Resultado"
          component={ResultScreen}
          options={{
            title: 'Resultado',
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={AboutScreen}
          options={{
            title: 'Sobre o App',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;