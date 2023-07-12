import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Detailcard = props => {
  const {data} = props;
  const {name, email, department, mobile} = data;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(1),
        }}>
        <Text style={{color: 'black'}}> Name</Text>
        <Text style={{color: 'black', textAlign: 'left', fontWeight: '500'}}>
          {name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(1),
        }}>
        <Text style={{color: 'black'}}> Email</Text>
        <Text style={{color: 'black', textAlign: 'left', fontWeight: '500'}}>
          {email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(1),
        }}>
        <Text style={{color: 'black'}}> Mobile No</Text>
        <Text style={{color: 'black', textAlign: 'left', fontWeight: '500'}}>
          {mobile}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(1),
        }}>
        <Text style={{color: 'black'}}> Department</Text>
        <Text style={{color: 'black', textAlign: 'left', fontWeight: '500'}}>
          {department}
        </Text>
      </View>
    </View>
  );
};

export default Detailcard;
