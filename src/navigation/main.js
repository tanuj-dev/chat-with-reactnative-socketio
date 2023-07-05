import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Computer from '../screens/Computer';
import Setting from '../screens/Setting';
import Explore from '../screens/Explore';
import Download from '../screens/Dowmload';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// export default function Main() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Computer" component={Computer} />
//       <Drawer.Screen name="BottomTabMain" component={BottomTabRoute} />
//     </Drawer.Navigator>
//   );
// }
const getTabNameAndLabel = tabName => {
  let result = '';
  switch (tabName) {
    case 'Home':
      result = {name: 'Home', icon: ''};
      // code block
      break;
    case 'Settings':
      result = {name: 'Setting', icon: ''};

      // code block
      break;
    case 'Explore':
      result = {name: 'Explore', icon: ''};

      // code block
      break;
    case 'Download':
      result = {name: 'Download', icon: ''};
      // code block
      break;
  }
  return result;
};
const BottomTabDesign = (tabInfo, props) => {
  console.log(tabInfo, 'tanuj prajaapti');
  const {accessibilityState} = tabInfo;
  const {name, icon} = getTabNameAndLabel(tabInfo.to.split('/')[2]);
  console.log(getTabNameAndLabel(tabInfo.to.split('/')[2]));
  console.log(name, 'tanuj');
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        tabInfo.onPress();
      }}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            tintColor: accessibilityState.selected ? 'blue' : 'red',
            resizeMode: 'contain',
          }}
          source={icon}></Image>
        <Text
          style={{
            // fontFamily: Fonts.LATO_REGULAR,
            fontSize: 11,
            color: accessibilityState.selected ? 'blue' : 'red',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Main() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarButton: BottomTabDesign,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarButton: BottomTabDesign,
        }}
        name="Settings"
        component={Setting}
      />
      <Tab.Screen
        options={{
          tabBarButton: BottomTabDesign,
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarButton: BottomTabDesign,
        }}
        name="Download"
        component={Download}
      />
    </Tab.Navigator>
  );
}
