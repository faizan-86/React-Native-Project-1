import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import {darkGreen} from '../components/Constant';
import Field from '../components/Field';
import Btn from '../components/Btn';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const showToast = msg => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
  });

  // console.log(input);
  const signUpHandlre = () => {
    if (!input.userName && !input.email && !input.password) {
      showToast('All Filed Required...');
      return;
    } else if (!input.userName) {
      showToast('Username Required');
      return;
    } else if (!input.email) {
      showToast('Email Required');
      return;
    } else if (!input.password) {
      showToast('Password Required');
      return;
    } else {
      if (input.userName && input.email && input.password) {
        AsyncStorage.setItem('userData', JSON.stringify(input));
        showToast('Signup Successfully');
        // navigation.navigate('AppStack');
        setInput({
          userName: '',
          email: '',
          password: '',
        });
      }
    }
  };
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
              marginTop: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            Create a new account
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 360,
              borderTopLeftRadius: 130,
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <Field
              placeholder="Username"
              keyboardType={'default'}
              onChangeText={txt =>
                setInput(prev => ({
                  ...prev,
                  userName: txt,
                }))
              }
              value={input.userName}
            />
            <Field
              placeholder="Email"
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
                  password: txt,
                }))
              }
              value={input.password}
            />
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                // marginBottom: 50,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontWeight: 'bold',
                  paddingRight: 5,
                  fontSize: 13,
                }}>
                By signing in, you agree to our
              </Text>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>
                Terms & Conditions
              </Text>
            </View>
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                marginBottom: 15,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontWeight: 'bold',
                  paddingRight: 5,
                  fontSize: 13,
                }}>
                and {''}
              </Text>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>
                Privacy Policy
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              press={signUpHandlre}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: 'grey'}}>Already have an account ?</Text>
              <TouchableOpacity
                style={{marginHorizontal: 5}}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Background>
  );
};

export default Signup;
