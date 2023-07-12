import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Inputfield = props => {
  const {inputType, placeHolderText, onChangeText, value} = props;
  return (
    <View style={{marginVertical: hp(1)}}>
      <Text style={{paddingVertical: hp(1)}}>{inputType}</Text>
      <TextInput
        placeholderTextColor={'bdc0cd'}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolderText}
        style={{
          borderWidth: 1,
          borderColor: '#bdc0cd',
          borderRadius: wp(6),
          paddingHorizontal: wp(5),
        }}
      />
    </View>
  );
};

export default Inputfield;
