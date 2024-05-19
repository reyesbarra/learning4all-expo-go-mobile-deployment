import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CursosScreen from './src/screens/CursosScreen';
import InfoCursoScreen from './src/screens/InfoCursoScreen';
import RegistroExitosoScreen from './src/screens/RegistroExitosoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cursos" component={CursosScreen} />
          <Stack.Screen name="InfoCurso" component={InfoCursoScreen} />
          <Stack.Screen name="RegistroExitoso" component={RegistroExitosoScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
