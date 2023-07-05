import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {userData} from '../../redux/Home/action';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {forHorizontalIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

export default function Home({navigation}) {
  const dispatch = useDispatch();
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

  useEffect(() => {}, []);

  // const dispatch = useDispatch();
  // const store = useSelector(state => state);
  // console.log(store);
  // const userlist = store.HomeData?.data;
  // console.log(userlist?.name);
  // console.log(userlist?.email);
  // console.log(userlist.name, 'hello threr whar');
  return (
    <View>
      <View
        style={{
          paddingHorizontal: wp(8),
          paddingVertical: wp(5),
          backgroundColor: '#FFD740',
        }}>
        <TouchableOpacity onPress={() => dispatch(userData())}>
          <Text style={{fontSize: wp(5)}}>Home</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={async () => {
          console.lo;
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
