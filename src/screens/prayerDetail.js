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

export default class PrayerDetail extends React.Component {
  render() {
    const nav = this.props.navigation;
    let image = nav.getParam("image");
    let notice = nav.getParam("notice");
    let prayer = nav.getParam("prayer");
    let content = nav.getParam("content");
    return (
      <ScrollView>
        <Image styleName="featured" source={{ uri: image }} />
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text styleName="bold">{prayer}</Text>
        </View>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text>{content}</Text>
        </View>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text>{notice}</Text>
        </View>
      </ScrollView>
    );
  }
}
