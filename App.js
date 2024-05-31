import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from './src/screens/Homepage';
import QuestionsPage from './src/screens/QuestionsPage';
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
          <Stack.Screen name='QuestionsPage' component={QuestionsPage} />
          <Stack.Screen name='Result' component={ResultsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuestionsProvider>
  )
}