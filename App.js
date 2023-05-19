import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {View, Text, ActivityIndicator} from 'react-native';
import Navigator from './src/navigation';
import {io} from 'socket.io-client';
import EncryptedStorage from 'react-native-encrypted-storage';

var socket = io('ws://localhost:3008', {
  transports: ['websocket'],
  forceNew: false,
});
const App = () => {
  const [auth, setAuth] = useState(undefined);
  const retrieveUserSession = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      if (session) {
        const jsondata = JSON.parse(session);
        console.log(jsondata, 'USER SESSION');
        setAuth(jsondata);
      } else {
        setAuth(null);
      }
    } catch (error) {
      console.log('error', error);
      // There was an error on the native side
    }
  };
  useEffect(() => {
    retrieveUserSession();
    if (!socket.connected) {
      socket.on('connect', () => {
        console.log('CLIENT SIDE SOCKET', socket.id, socket.connected);
      });
    }
  }, []);
  if (auth === undefined)
    return <ActivityIndicator color={'red'} size={'large'}></ActivityIndicator>;
  return (
    <Provider store={store}>
      <Navigator auth={auth}></Navigator>
    </Provider>
  );
};

export default App;
