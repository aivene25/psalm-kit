/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import {
  Text,
  Button,
  Image,
  Examples,
  ImageBackground,
  Title,
  Row,
  Caption,
  Screen,
  NavigationBar,
  ListView,
  Subtitle,
  Divider
} from "@shoutem/ui";

export default class PsalmDetail extends React.Component {
  render() {
    const nav = this.props.navigation;
    let name = nav.getParam("name");
    let image = nav.getParam("image");
    let psalm = nav.getParam("psalm");
    let prayer = nav.getParam("prayer");
    let title = nav.getParam("title");
    return (
      <ScrollView>
        <Image styleName="featured" source={{ uri: image }} />
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text styleName="bold">{title}</Text>
        </View>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text>{psalm}</Text>
        </View>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text>{prayer}</Text>
        </View>
      </ScrollView>
    );
  }
}
