import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {userData} from '../../redux/Home/action';

export default function Home({navigation}) {
  useEffect(() => {
    dispatch(userData());
  }, []);

  const dispatch = useDispatch();
  const store = useSelector(state => state);
  console.log(store);
  const userlist = store.HomeData?.data;
  // console.log(userlist?.name);
  // console.log(userlist?.email);
  // console.log(userlist.name, 'hello threr whar');
  return (
    <View>
      <FlatList
        data={userlist}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}></FlatList>
    </View>
  );
}
