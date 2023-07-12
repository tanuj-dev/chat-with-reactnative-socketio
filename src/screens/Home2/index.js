import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constants} from '../../utilities';
import {
  createData,
  deleteData,
  editData,
  saveRecord,
  getSaveRecord,
} from '../../redux/actions';
import Inputfield from '../../components/Inputfiled';
import CustomButton from '../../components/Button';
import SmallButton from '../../components/Button2';
import Detailcard from '../../components/DetailCard';
import {useDispatch, useSelector} from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  //   const store = useSelector(state => state);
  const store = useSelector(state => state);
  const details = store?.userdata?.data;
  console.log(details, 'tanuj');
  const [editId, setEditId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    mobile: '',
  });
  const {name, email, department, mobile} = formData;
  const onSubmit = () => {
    if (editId == null) {
      const res = dispatch(
        createData({
          ...formData,
          ID: new Date().getTime() + '' + Math.floor(Math.random() * 100),
        }),
      );
    } else {
      console.log({
        ...formData,
        ID: editId,
      });
      dispatch(
        editData({
          ...formData,
          ID: editId,
        }),
      );
      setEditId(null);
    }
    setFormData({name: '', email: '', department: '', mobile: ''});
    setIsVisible(!isVisible);
  };
  const handleSubmit = id => {
    const res = dispatch(deleteData(id));
  };

  const isEmailValid = () => {
    let {name, email, department, mobile} = formData;
    let isValid = true;
    if (!Constants.REGEX.EMAIL.test(email)) {
      if (email.length == 0) {
        Alert.alert('Empty email');
        isValid = false;
        return;
      } else {
        Alert.alert('Invalid email');
        isValid = false;
      }
    } else {
      isValid = true;
    }
    return isValid;
  };
  const isNumberValid = () => {
    let {mobile} = formData;
    let isValid = true;
    if (!Constants.REGEX.NUMBERS.test(mobile)) {
      if (mobile.length === 0) {
        Alert.alert('empty mobile number');
        return;
      } else {
        Alert.alert('Invalid mobile number');
        isValid = false;
      }
    } else {
      isValid = true;
    }
    return isValid;
  };
  const isNameValid = () => {
    let isValid = true;
    let {name} = formData;
    if (!Constants.REGEX.NAME.test(name)) {
      if (name.length === 0) {
        Alert.alert('empty Name');
        return;
      } else {
        Alert.alert('Invalid name');
        isValid = false;
      }
    } else {
      isValid = true;
    }
    return isValid;
  };

  useEffect(() => {
    dispatch(getSaveRecord());
  }, []);
  return (
    <SafeAreaView bar style={{flex: 1}}>
      <ScrollView>
        <>
          <StatusBar
            animated={true}
            backgroundColor="#016658"
            // barStyle={statusBarStyle}
            // showHideTransition={statusBarTransition}
            // hidden={hidden}
          />
          {isVisible === false && (
            <View
              style={{
                justifyContent: 'flex-end',
                backgroundColor: '#016658',
                borderBottomLeftRadius: wp(5),
                borderBottomRightRadius: wp(5),
                paddingHorizontal: wp(3),
                paddingVertical: hp(1.5),
              }}>
              <TouchableOpacity
                onPress={() => setIsVisible(!isVisible)}
                style={{
                  borderColor: 'white',
                  borderWidth: 1,
                  alignSelf: 'flex-end',
                  height: hp(7),
                  width: hp(7),
                  borderRadius: hp(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: hp(3), color: 'white'}}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{paddingHorizontal: hp(2), marginTop: hp(1)}}>
            {isVisible === false && (
              <FlatList
                data={details}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        backgroundColor: '#E5efee',
                        paddingHorizontal: hp(2),
                        paddingVertical: hp(1),
                        marginTop: hp(1),
                        borderRadius: hp(1),
                      }}>
                      <Detailcard data={item} />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          marginTop: hp(2),
                        }}>
                        <SmallButton
                          onPress={() => {
                            setFormData({
                              name: item.name,
                              email: item.email,
                              department: item.department,
                              mobile: item.mobile,
                            });
                            setEditId(item.ID);
                            setIsVisible(!isVisible);
                          }}
                          title={'Edit'}
                          color={'#016658'}
                        />
                        <SmallButton
                          title={'Delete'}
                          color={'#ff0000'}
                          onPress={() => handleSubmit(item.ID)}
                        />
                      </View>
                      <Text>{item.ID}</Text>
                    </View>
                  );
                }}
              />
            )}
          </View>
          <View>
            <Modal style={{margin: 0}} isVisible={isVisible}>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: wp(3),
                  justifyContent: 'center',
                }}>
                <View style={{backgroundColor: 'white', borderRadius: wp(4)}}>
                  <View
                    style={{marginVertical: hp(3), paddingHorizontal: wp(4)}}>
                    <Inputfield
                      inputType={'Name'}
                      placeHolderText={'Please enter name '}
                      onChangeText={txt =>
                        setFormData({...formData, name: txt})
                      }
                      value={formData.name}
                    />
                    <Inputfield
                      inputType={'Email'}
                      placeHolderText={'Please enter Email '}
                      onChangeText={txt =>
                        setFormData({...formData, email: txt})
                      }
                      value={formData.email}
                    />
                    <Inputfield
                      inputType={'Department'}
                      placeHolderText={'Please enter Department name '}
                      onChangeText={txt =>
                        setFormData({...formData, department: txt})
                      }
                      value={formData.department}
                    />
                    <Inputfield
                      inputType={'Mobile Number'}
                      placeHolderText={'Please enter Mobile Number'}
                      onChangeText={txt =>
                        setFormData({...formData, mobile: txt})
                      }
                      value={formData.mobile}
                    />
                    <CustomButton
                      onPress={() => {
                        if (
                          name.length &&
                          email.length &&
                          department.length &&
                          mobile.length > 0
                        ) {
                          let validcheck =
                            isEmailValid() &&
                            isNumberValid() &&
                            isNameValid() &&
                            formData.department.length > 0;

                          if (validcheck) {
                            onSubmit();
                          }
                        } else {
                          Alert.alert('Please fill the details');
                        }
                      }}
                      title={'Submit'}
                      radius={hp(5)}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </>
      </ScrollView>
      {isVisible !== true && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: hp(1),
          }}>
          <TouchableOpacity
            onPress={async () => {
              // const data = await AsyncStorage.getItem('USER_STORE');
              // dispatch(getSaveRecord());
              dispatch({type: 'RESET_DATA'});
              try {
                await AsyncStorage.removeItem('USER_STORE');
                dispatch({type: 'RESET_DATA'});
              } catch (e) {
                // remove error
              }
            }}
            activeOpacity={0.5}
            style={{
              backgroundColor: '#ff0000',
              paddingHorizontal: hp(4),
              paddingVertical: hp(1),
              borderRadius: hp(1),
            }}>
            <Text style={{color: 'white', fontWeight: '500'}}>
              CLEAR RECORD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => saveRecord(JSON.stringify(store?.userdata))}
            activeOpacity={0.5}
            style={{
              borderRadius: hp(1),
              marginLeft: hp(1),
              backgroundColor: '#016658',
              paddingHorizontal: hp(4),
              paddingVertical: hp(1),
            }}>
            <Text style={{color: 'white', fontWeight: '500'}}>SAVE RECORD</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomePage;
