import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {darkGreen, green} from '../components/Constant';
import Background from '../components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import Btn from '../components/Btn';

export default function MainScreen({navigation}) {
  const [userData, setUserData] = useState(null);
  const getDataHandler = async () => {
    try {
      let getData = await AsyncStorage.getItem('userData');
      if (getData) {
        let parseData = JSON.parse(getData);
        console.log(parseData, 'LoginData');
        setUserData(parseData);
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  // console.log('Hello', userData);

  return (
    <Background style={{flex: 1, backgroundColor: 'blue'}}>
      <View
        style={{
          // height: 50,
          width: '100%',
          // backgroundColor: 'red',
          marginVertical: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: '50%',
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Email
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: '50%',
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={{width: '%'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {userData?.email}
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text>Index:</Text>
          </View>
        </View>
      </View>
    </Background>
  );
}
