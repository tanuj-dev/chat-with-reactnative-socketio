import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {userData} from '../../redux/Home/action';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function Home({navigation}) {
  // const removeUserSession = async () => {
  //   try {
  //     await EncryptedStorage.removeItem('user_session');
  //     const session = await EncryptedStorage.getItem('user_session');
  //     const data = JSON.parse(session);
  //     const token = data.token;

  //     // Congrats! You've just removed your first value!
  //   } catch (error) {
  //     // There was an error on the native side
  //   }
  // };

  // useEffect(() => {
  //   dispatch(userData());
  // }, []);

  // const dispatch = useDispatch();
  // const store = useSelector(state => state);
  // console.log(store);
  // const userlist = store.HomeData?.data;
  // console.log(userlist?.name);
  // console.log(userlist?.email);
  // console.log(userlist.name, 'hello threr whar');
  return (
    <View>
      <Text>hello</Text>
      <TouchableOpacity
        onPress={async () => {
          try {
            await EncryptedStorage.removeItem('user_session');
            navigation.replace('Login');
            // Congrats! You've just removed your first value!
          } catch (error) {
            // There was an error on the native side
          }
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
