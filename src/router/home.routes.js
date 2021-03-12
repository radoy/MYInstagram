import React from 'react';
import 'react-native-gesture-handler';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'MY Instagram',
          headerTitle: (
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 135, height: 0}}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerLeft: () => {
            return <Feather name="camera" size={25} color={'#000'} />;
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerRight: () => {
            return (
              <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
