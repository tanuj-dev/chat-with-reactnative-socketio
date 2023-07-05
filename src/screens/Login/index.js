import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {io} from 'socket.io-client';
import {GiftedChat} from 'react-native-gifted-chat';
export default function Login({navigation}) {
  const [data, setData] = useState({});
  // const [jdata,setJdata]
  const [passwordError, checkPassword] = useState('');
  const [checkUserName, setCheckUserName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const isUserNameValid = () => {
    console.log(checkUserName, 'usename');
    let isValid = true;
    if (username) {
      if (username.length < 5) {
        setCheckUserName('Empty Mail');
        isValid = false;
        return;
      } else {
        setCheckUserName('valid Mail');
        isValid = true;
      }
    } else {
      // setCheckUserName('');
      isValid = false;
    }
    return isValid;
  };
  const isPasswordValid = () => {
    let isValid = true;

    if (password.length < 8) {
      if (password.length === 0) {
        checkPassword('Empty password');
        isValid = false;
      } else {
        checkPassword('short password');
        isValid = false;
      }
    } else {
      checkPassword('');
      isValid = true;
    }
    return isValid;
  };

  const storeUserSessionasync = async data => {
    try {
      await EncryptedStorage.setItem('user_session', JSON.stringify(data));
      navigation.replace('Home');
      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  };

  const [text, setText] = useState('');
  var socket = io('ws://localhost:3008', {
    transports: ['websocket'],
    forceNew: true,
  });
  useEffect(() => {
    console.log(data);
    // console.log(JSON.parse(data));

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, [data]);
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* <GiftedChat
        messages={messages}
        onSend={re => onSend(re)}
        user={{
          _id: 1,
        }}
      /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>hello</Text>
        <Image
          style={{height: 250, width: 250}}
          source={require('../../assets/Images/mahadev.png')}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 25,
            marginVertical: 20,
            opacity: 0.8,
          }}>
          𝖫𝖮𝖦𝖨𝖭
        </Text>
        <View
          style={{
            backgroundColor: '#FFD740',
            width: '80%',
            borderRadius: 30,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 15,
              width: 15,
              tintColor: 'black',
              resizeMode: 'contain',
            }}
            source={require('../../assets/Images/icons8-user-90.png')}
          />
          <TextInput
            placeholder="Username"
            onChangeText={txt => setUsername(txt)}
            placeholderTextColor={'black'}
            style={{fontSize: 15}}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            backgroundColor: '#FFD740',
            width: '80%',
            borderRadius: 30,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 15,
              width: 15,
              tintColor: 'black',
              resizeMode: 'contain',
            }}
            source={require('../../assets/Images/5a228be9841be8.1413484915122134815411.png')}
          />
          <TextInput
            placeholder="Password"
            onChangeText={txt => setPassword(txt)}
            placeholderTextColor={'black'}
            style={{fontSize: 15}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            storeUserSessionasync({username, password});
          }}
          activeOpacity={0.8}
          style={{width: '80%'}}>
          <View
            style={{
              marginTop: 30,
              backgroundColor: '#FFD740',

              borderRadius: 30,
              paddingVertical: 14,
              alignItems: 'center',
              // opacity: 0.8,
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '800'}}>
              {signup ? 'Signup' : 'Login'}
            </Text>
          </View>
        </TouchableOpacity>
        {/* {checkUserName && passwordError && (
          <Text style={{color: 'red', fontSize: 16}}>
            {checkUserName}
            {passwordError}
          </Text>
        )} */}
        {signup ? null : (
          <View
            style={{
              marginTop: 30,
              // backgroundColor: '#F85100',
              width: '90%',
              borderRadius: 30,
              // paddingVertical: 14,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFD740',
                fontSize: 16,
                fontWeight: '700',
                // opacity: 0.8,
              }}>
              Forgot password
            </Text>
            <Text
              style={{
                color: '#FFD740',
                fontSize: 16,
                fontWeight: '700',
                // opacity: 0.8,
              }}>
              Help
            </Text>
          </View>
        )}
        <TouchableOpacity activeOpacity={1} onPress={() => setSignup(!signup)}>
          {signup ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setSignup(!signup)}>
              <>
                <Text
                  style={{
                    marginTop: 60,
                    color: '#FFD740',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Back to login
                </Text>
              </>
            </TouchableOpacity>
          ) : (
            <>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 60,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Not Registered
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#FFD740',
                  }}>
                  {` ? Create account`}
                </Text>
              </View>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
