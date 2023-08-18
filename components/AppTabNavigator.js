import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SpaceStation from '../screens/SpaceStation';
import WeatherReport from '../screens/WeatherReport';
import Meteors from '../screens/Meteors'
import ISSLocationScreen from '../screens/ISSLocationScreen';

export const AppTabNavigator = createBottomTabNavigator({
  ISS : {
    screen: SpaceStation,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "ISS Tracker",
    },
    Meteors:{
      screen: Meteors
    },
    ISSLocationScreen:{
      screen:ISSLocationScreen
    }
  },
  WeatherAPI: {
    screen: WeatherReport,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Weather Report",
    }
  }
});