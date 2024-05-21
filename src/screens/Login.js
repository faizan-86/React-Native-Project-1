import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import {darkGreen} from '../components/Constant';
import Field from '../components/Field';
import Btn from '../components/Btn';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const showToast = msg => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
  const [input, setInput] = useState({
    email: '',
    pass: '',
  });
  const loginHandler = () => {
    if (!input.email && !input.pass) {
      showToast('All Field Required');
      return;
    } else if (!input.email) {
      showToast('Email Field Required');
      return;
    } else if (!input.pass) {
      showToast('password Field Required');
      return;
    } else if (input.email && input.pass) {
      AsyncStorage.setItem('userData', JSON.stringify(input));
      showToast('Login Successully');
      navigation.navigate('AppStack');
      setInput({
        email: '',
        pass: '',
      });
    }
  };
  // console.log(input);
  return (
    <Background>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{width: 360, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontWeight: 'bold',
              marginVertical: 20,
              flex: 1,
            }}>
            Login
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 360,
              borderTopLeftRadius: 130,
              paddingTop: 100,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: darkGreen}}>
              Welcome To Login
            </Text>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 15,
                marginBottom: 15,
              }}>
              Login to your account
            </Text>
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
              onChangeText={txt =>
                setInput(prev => ({
                  ...prev,
                  email: txt,
                }))
              }
              value={input.email}
            />
            <Field
              placeholder="password"
              secureTextEntry={true}
              onChangeText={txt =>
                setInput(prev => ({
                  ...prev,
                  pass: txt,
                }))
              }
              value={input.pass}
            />
            <View
              style={{
                width: '78%',
                alignItems: 'flex-end',
                paddingRight: 16,
                marginBottom: 30,
              }}>
              <Text
                style={{color: darkGreen, fontSize: 14, fontWeight: 'bold'}}>
                Forgot Password?
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              press={loginHandler}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: 'grey'}}>Don't have an account ?</Text>
              <TouchableOpacity
                style={{marginHorizontal: 5}}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Background>
  );
};

export default Login;
