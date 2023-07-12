import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = props => {
  const {radius, title, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        marginTop: hp(5),
        alignItems: 'center',
        backgroundColor: '#016658',
        paddingVertical: hp(2),
        borderRadius: radius,
      }}>
      <Text style={{fontSize: hp(2), color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
