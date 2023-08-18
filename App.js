import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import {AppTabNavigator} from "./components/AppTabNavigator";
import Meteors from './screens/Meteors'
import ISSLocationScreen from './screens/ISSLocationScreen';
import JokeOfTheDay from './screens/JokeOfTheDay';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  Bottomtab:{screen:AppTabNavigator},
  Meteors:{screen:Meteors},
  ISSLocationScreen:{screen:ISSLocationScreen},
  JokeOfTheDay:{screen:JokeOfTheDay}
})

const AppContainer =  createAppContainer(switchNavigator);



