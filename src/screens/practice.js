// const colorScheme = useColorScheme();
// const [input, setInput] = useState('');
// const [flag, setFlag] = useState(false);
// const [updateUser, setUpdateUser] = useState('');
// const [userData, setUserData] = useState([]);
// const getDataHandler = async () => {
//   let getData = await AsyncStorage.getItem('userData');
//   if (getData) {
//     let parseData = JSON.parse(getData);
//     console.log(parseData, 'My Data');
//     setUserData(parseData);
//   }
// };
// useEffect(() => {
//   getDataHandler();
// }, []);

// const addUserHandler = () => {
//   if (input) {
//     setUserData(pre => [...pre, input]);
//     let addData = [...userData, input];
//     AsyncStorage.setItem('userData', JSON.stringify(addData)).catch(err =>
//       console.log(err, 'Error'),
//     );
//     setInput('');
//   }
// };
// console.log(userData);
// const deleteUserHandler = data => {
//   // console.log(data);
//   let deleteData = userData.filter(items => items !== data);
//   console.log(deleteData, 'deleteData');
//   setUserData(deleteData);

//   AsyncStorage.setItem('userData', JSON.stringify(deleteData)).catch(err =>
//     console.log(err, 'Error'),
//   );
// };
// const updateHandler = data => {
//   // console.log(data);
//   setInput(data);
//   setFlag(true);
//   setUpdateUser(data);
// };
// const userUpdateHandler = () => {
//   let updateData = userData.map(items => {
//     if (items === updateUser) {
//       return input;
//     } else {
//       return items;
//     }
//   });
//   setUserData(updateData);
//   AsyncStorage.setItem('userData', JSON.stringify(updateData)).catch(err =>
//     console.log(err, 'Error'),
//   );
//   setInput('');
//   setFlag(false);
  // setData = setUpdateUser
// };

// const [count, setCount] = useState(0);
// const [name, setName] = useState([]);
// const incrementHandler = ()=> {
//   setCount(count < 9 ? count+1  : count)
// }
// const decrementtHandler = ()=> {
//   setCount(count <= 0 ? 0 : count-1)

// }
// const resetHandler = ()=> {
//   setCount(0)
// }
// const addUserHandler = () => {
//   setName(name => [...name, 'Faizan', 'Maaz', 'Hamza', 'Murtaza', 'Husnain']);
// };

// const removeUserHandler = ()=> {
//   setCount(count <= 0 ? 0 : count-1)

// }
// const resetUserHandler = ()=> {
//   setCount(0)
// }}
// console.log(input);
return (
  <SafeAreaView style={{flex: 1 ,backgroundColor:'blue'}}>
    <ThemeProvider theme={theme}>
      {/* <MainStack/> */}
      {/* <NavigationContainer> */}
        {/* <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.red}>App</Text>
          <StatusBar 
          backgroundColor='gray'
          barStyle={'light-content'}
          // hidden={}
          // translucent= 'true'
          />
          <Text
            style={[
              styles.txt,
              {
                color:
                  colorScheme === 'dark'
                    ? theme.darkColor.white
                    : theme.lightColor.red,
              },
            ]}>
            Hello World
          </Text>
          <Text style={{...styles.txt1, color: 'blue'}}>Hello World</Text>
          <Text style={styles.txt2}>Hello World</Text>
          <Text style={styles.txt3}>Hello World</Text>
          <ActivityIndicator
            size={'large'}
            color={'#00ff00'}
            style={{opacity: 10}}
          />
          <ActivityIndicator
            size={'small'}
            color={'#000'}
            style={{opacity: 1, resizeMode: '#00ff00'}}
          />

          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 400, height: 600}}
          />
          <View style={{height: 200, backgroundColor: 'blue'}} />
          <View style={{height: 200, backgroundColor: 'skyblue'}} />
          <View style={{height: 200, backgroundColor: 'black'}} />
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              resizeMode="cover"
              style={{width: 400, height: 400}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 42,
                  lineHeight: 80,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  backgroundColor: '#000000c0',
                  marginTop: 150,
                }}>
                Inside
              </Text>
            </ImageBackground>
          </View>
          <View>
            <Pressable
              style={{
                alignItems: 'center',
                backgroundColor: 'green',
                padding: 10,
              }}
              onPressIn={() => console.log('Hello World')}
              >
              <Text>Press Me</Text>
            </Pressable>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#f44',
                padding: 10,
              }}
              onPress={() => console.log('hello')}>
              <Text style={{color: 'green'}}>Press Here</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              placeholder=""
              placeholderTextColor={'black'}
              style={{
                height: 50,
                // width:'100%',
                margin: 25,
                borderWidth: 1,
                borderColor: 'black',
                // backgroundColor: first ? 'blue' : 'white',
                color: 'black',
              }}
              // value={input}
              onChangeText={txt => setInput(txt)}
              // onFocus={() => setfirst(true)}
              // onBlur={() => setfirst(false)}
              // returnKeyType="done"
              // selectTextOnFocus={true}
              // multiline={true}
              // keyboardType={'number-pad'}
              // maxLength={6}
              // editable={true}
              // secureTextEntry={true}
            />
            <TextInput
              style={{
                height: 50,
                // width:'100%',
                margin: 25,
                borderWidth: 1,
                borderColor: 'black',
                // backgroundColor: first ? 'blue' : 'white',
                color: 'black',
              }}
            />
            <TextInput
              style={{
                height: 50,
                // width:'100%',
                margin: 25,
                borderWidth: 1,
                borderColor: 'black',
                // backgroundColor: first ? 'blue' : 'white',
                color: 'black',
              }}
            />
            <TextInput
              style={{
                height: 50,
                // width:'100%',
                margin: 25,
                borderWidth: 1,
                borderColor: 'black',
                // backgroundColor: first ? 'blue' : 'white',
                color: 'black',
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView> */}
        {/* <KeyboardAvoidingView style={{flex: 1}}>
          <LinearGradient
            colors={['#2193b0', '#8360c3', '#bdc3c7']}
            style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={incrementHandler}
          >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Increment
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign:'center',
            marginVertical: 20,
          }}>
          {count?count:0}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={decrementtHandler}
          >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Decrement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '50%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
          onPress={resetHandler}
          >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Reset
          </Text>
        </TouchableOpacity>
             <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={addUserHandler}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Add User
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            marginVertical: 20,
          }}>
          {name?name:''}
        </Text> 
            <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={decrementtHandler}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Removed User
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '50%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
          onPress={resetHandler}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Reset
          </Text>
        </TouchableOpacity> 
            <TextInput
              placeholder="Add User"
              placeholderTextColor={'white'}
              style={{
                height: 50,
                width: '80%',
                margin: 25,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                borderRadius: 5,
                textDecorationLine: 'underline',
                // textDecorationStyle: 'solid',
              }}
              value={input}
              onChangeText={txt => setInput(txt)}
              // onFocus={() => setfirst(true)}
              // onBlur={() => setfirst(false)}
              // returnKeyType="done"
              // selectTextOnFocus={true}
              // multiline={true}
              keyboardType={'default'}
              // maxLength={6}
              // editable={true}
              // secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                height: 50,
                width: '35%',
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 5,
                borderColor: 'white',
                borderWidth: 1,
              }}
              // onPressIn={setData}
              // onPressOut={getData}
              onPress={flag ? userUpdateHandler : addUserHandler}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                }}>
                {flag ? 'Update User' : 'Add User'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              // marginHorizontal: 20,
            }}
          />
        </KeyboardAvoidingView>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          {userData?.map((items, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',

                marginTop: 20,
              }}>
              <View style={{width: '55%'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {items}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '45%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    height: 35,

                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 8,

                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                    }}
                    onPress={() => deleteUserHandler(items)}>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,

                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 6,
                    marginLeft: 4,
                    paddingHorizontal: 8,
                  }}
                  onPress={() => updateHandler(items)}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                    }}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <View style={{height: 20}} />
        </ScrollView> */}
      {/* </NavigationContainer> */}
    </ThemeProvider>
  </SafeAreaView>
);
const styles = StyleSheet.create({
    red: {
      color: 'black',
    },
    txt: {
      fontSize: 30,
      color: theme.lightColor.black,
      marginTop: 50,
      marginLeft: 50,
      fontFamily: theme.fontFamily.RobotoBold,
    },
    txt1: {
      fontSize: 30,
      color: 'green',
      marginTop: 20,
      marginLeft: 40,
    },
    txt2: {
      fontSize: 50,
      color: 'green',
      marginTop: 20,
      marginLeft: 30,
    },
    txt3: {
      fontSize: 60,
      color: 'red',
      marginTop: 20,
      marginLeft: 20,
    },
    blue: {
      backgroundColor: 'blue',
    },
  });
  