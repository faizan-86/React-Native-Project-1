import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useColorScheme,
  ActivityIndicator,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider, theme} from './src/components/Theme';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from './src/navigation/MainStack';

export default function App() {
  return (
    <View style={{backgroundColor:'black',flex:1}}>
     <MainStack/>
    </View>
  );
}
