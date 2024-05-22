import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from './src/screens/Homepage';
import Questions1 from './src/screens/Questions1';
import ResultsPage from './src/screens/Result';
import { NavigationContainer } from '@react-navigation/native';
import { QuestionsProvider } from './src/context/answersContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QuestionsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Homepage' component={Homepage} />
          <Stack.Screen name='Questions1' component={Questions1} />
          <Stack.Screen name='Result' component={ResultsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuestionsProvider>
  )
}