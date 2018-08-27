/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {
  Image,
  Row,
  Examples,
  ImageBackground,
  Title,
  Screen,
  NavigationBar,
  ListView,
  Subtitle,
  Divider
} from "@shoutem/ui";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

//type Props = {};
export default class aboutScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [
        {
          name: "Gaspar Brasserie",
          address: "185 Sutter St, San Francisco, CA 94109",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
          }
        },
        {
          name: "Chalk Point Kitchen",
          address: "527 Broome St, New York, NY 10013",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
          }
        },
        {
          name: "Kyoto Amber Upper East",
          address: "225 Mulberry St, New York, NY 10012",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        },
        {
          name: "Sushi Academy",
          address: "1900 Warner Ave. Unit A Santa Ana, CA",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"
          }
        },
        {
          name: "Sushibo",
          address: "35 Sipes Key, New York, NY 10012",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-5.jpg"
          }
        },
        {
          name: "Mastergrill",
          address: "550 Upton Rue, San Francisco, CA 94109",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"
          }
        }
      ]
    };
  } // constructor ends

  renderRow(restaurant) {
    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: restaurant.image.uri }}
        >
          <Title>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">
              {" "}
              {restaurant.address}
            </Subtitle>
          </Title>
        </ImageBackground>
        <Divider styleName="line" />
      </View>
    );
  }
  render() {
    const restaurants = this.state.restaurants;
    /*
    return (
      <Screen>
        <NavigationBar title="Restaurants" styleName="inline" />
        <ListView data={restaurants} renderRow={this.renderRow} />
      </Screen>
    );*/
    return (
      <ScrollView>
        <Image styleName="featured" source={require("./PST.jpg")} />
        <Row styleName="small">
          <Image
            styleName="small-avatar"
            source={{
              uri:
                "https://shoutem.github.io/img/ui-toolkit/examples/image-9.png"
            }}
          />
          <Subtitle styleName="bold">Azeez Bayo</Subtitle>
        </Row>
        <Row>
          <Icon name="logo-gmail" />
          <Text>harzeezassociates@gmail.com</Text>
        </Row>
        <Row>
          <Icon name="logo-facebook" />
          <Text>Azeez Bayo Nojeem</Text>
        </Row>
        <Row>
          <Icon name="logo-twitter" />
          <Text>@azeezbayo_NAB </Text>
        </Row>
        <Row>
          <Icon name="ios-information-circle" />
          <Text>  Psalm Kit by @hazeezadebayo </Text>
        </Row>
        <Row>
          <Icon name="ios-ionitron" />
          <Text>  1.0.0</Text>
        </Row>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
