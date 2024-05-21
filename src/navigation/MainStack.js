import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const options = {
    header: () => false,
    // animation: 'slide_from_right',
  };
  const [userData, setUserData] = useState(null);
  const getDataHandler = async () => {
    try {
      let getData = await AsyncStorage.getItem('userData');
      if (getData) {
        let parseData = JSON.parse(getData);
        console.log(parseData, 'My Data');
        setUserData(parseData);
      }
    } catch (error) {
      console.log(error, 'Error');
    }
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  // console.log(userData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {userData?.email ? (
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={options}
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={options}
          />
        )} */}
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={options}
        />
        <Stack.Screen name="AppStack" component={AppStack} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
