import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {io} from 'socket.io-client';
import {GiftedChat} from 'react-native-gifted-chat';
export default function Login({navigation}) {
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const [text, setText] = useState('');
  var socket = io('ws://localhost:3008', {
    transports: ['websocket'],
    forceNew: true,
  });
  useEffect(() => {
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
  }, []);
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
            paddingVertical: 14,
            alignItems: 'center',
            // opacity: 0.8,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
            Loogin
          </Text>
        </View>
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
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
            marginTop: 60,
            // opacity: 0.8,
          }}>
          Not Registered ?{' '}
          <Text style={{color: '#FFD740'}}>Create account</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
