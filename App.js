import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {View, Text} from 'react-native';
import Navigator from './src/navigation';
import {io} from 'socket.io-client';

var socket = io('ws://localhost:3008', {
  transports: ['websocket'],
  forceNew: false,
});
const App = () => {
  useEffect(() => {
    if (!socket.connected) {
      socket.on('connect', () => {
        console.log('CLIENT SIDE SOCKET', socket.id, socket.connected);
      });
    }
  }, []);
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
};

export default App;
