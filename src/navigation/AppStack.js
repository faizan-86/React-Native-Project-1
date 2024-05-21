import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const options = {
    header: () => false,
    // animation: 'slide_from_right',
  };
  return (
    <Stack.Navigator 
    initialRouteName='MainScreen'
    >
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={options}
      />
    </Stack.Navigator>
  );
}
