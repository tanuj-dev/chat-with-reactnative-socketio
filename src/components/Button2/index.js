import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SmallButton = props => {
  const {title, onPress, color} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: hp(1),
        backgroundColor: color,
        paddingVertical: hp(0.8),
        paddingHorizontal: hp(3),
        borderRadius: hp(3),
      }}>
      <Text style={{fontSize: hp(1.9), color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
