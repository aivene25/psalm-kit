/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import {
  Examples,
  ImageBackground,
  Title,
  Screen,
  NavigationBar,
  ListView,
  Subtitle,
  Divider
} from "@shoutem/ui";
import { TabNavigator, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import psalmsScreen from "./src/screens/psalmsScreen";
import aboutScreen from "./src/screens/aboutScreen";
import prayerScreen from "./src/screens/prayerScreen";

/*const Tabs = createBottomTabNavigator({
  Psalms:{
    screen: psalmsScreen,
    naviagtionOptions:{
      tabBarLabel: 'Psalms',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },
  About: {
    screen: aboutScreen,
    naviagtionOptions:{
      tabBarLabel: 'About'
    }
  }
});
*/
const Tabs = createBottomTabNavigator(
  {
    Psalm: {
      screen: psalmsScreen,
      navigationOptions: () => ({
        tabBarIcon: ( { focused, tintColor }) => {
          return <Icon name="ios-home" size={22} color={tintColor} />
        }
      })
    },
    Prayers: {
      screen: prayerScreen,
      navigationOptions: ( ) => ({
        tabBarIcon: ( { focused, tintColor }) => {
          return <Icon name="ios-pint" size={22} color={tintColor} />
        }
      })
    },
    About: {
      screen: aboutScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-person" size={22} color={tintColor} />
        }
      })
    }
    
  },
  {
    tabBarPosition: "top",
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "gray"
    }
  }
  
);

export default class App extends Component {
  render() {
    return <Tabs />;
  }
}
