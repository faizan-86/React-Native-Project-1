import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkGreen, green} from '../components/Constant';

const Home = ({navigation}) => {
  return (
    <Background>
      <View
        style={{marginHorizontal: 40, marginVertical: 40, marginBottom: 20}}>
        <Text style={{color: 'white', fontSize: 50}}>Let's Start</Text>
        <Text style={{color: 'white', fontSize: 50, marginBottom: 70}}>
          Coding
        </Text>
      </View>
      <Btn
        bgColor={green}
        textColor="white"
        btnLabel="Login"
        press={() => navigation.navigate('Login')}
      />
      <Btn
        bgColor="white"
        textColor={darkGreen}
        btnLabel="Signup"
        press={() => navigation.navigate('Signup')}
      />
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
