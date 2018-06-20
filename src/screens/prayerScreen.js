/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "react-navigation";
import PrayerDetail from "./prayerDetail";
import {
  Button,
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

//type Props = {};
class prayerScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [
        {
          prayer: "THANKS GIVING PRAYER",
          excerpt: "O God my creator, everlasting king... ",
          content:
            "O God my creator, everlasting king, you that accepted Naoh’s offering after over flow of water. I worship you o Lord, and I’m thanking you for your goodness and mercy upon me, thank you for protecting me from my childhood till today also form all form of satanic battle. God of mercy, and also thanking you for my daily food and other provisions you always make available for me.Holy God, I am thanking you, giving you all the praise because you did not allow my enemies to mock me. In Jesus name of Christ, I beg you o Lord please accept my thanksgiving and praise. Mighty God, do not let your mercy leave me forever and ever. And let my thanks giving and praise be accepted before you. Amen.",
          notice:
            "Before anything you have to say this prayer of thanks every time and when you want to start any project. It is important we let our thanksgiving be more than asking from God.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"
          }
        },
        {
          prayer: "PRAYER FOR FORGIVENESS",
          excerpt: "O Lord, God of mercy, Holy God I confess ... ",
          content:
            "O Lord, God of mercy, Holy God I confess my sins before you now, sins in my behavior, in my thinking and in my act, God of mercy please forgive me of all my sins, wash me thoroughly from my sins and make me to be clean, o Lord. And answer all my prayers in Jesus name. Amen.  ",
          notice:
            "You have to confess all your sins and transgressions to God before you say this prayer above with lower voice to God, he is the only one that has the power to forgive.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
          }
        },
        {
          prayer: "MORNING PRAYER",
          excerpt: "Powerful God, I thank you Lord, I give praise... ",
          content:
            "Powerful God, I thank you Lord, I give praise and honor to your holy name for sparing my life right from last night till this morning, I praise you because you protected me and you wake me up this morning to the land of the livings. Everlasting God, I will be going out to my place of work and every other places, I beg you in Jesus name, protect me from any form of danger and also from the enemy. Do not let me fall into the devil’s trap, light up my path, cover my goings and comings with the blood of Jesus, grant me your goodness and mercy in Jesus in any activity I indulge in or anything I lay my hands on should be a success, so that I can praise your name. Amen.",
          notice: " ",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        },
        {
          prayer: "NIGHT PRAYER",
          excerpt: "O Lord, the most high God, most powerful... ",
          content:
            "O Lord, the most high God, most powerful God over everything. He who covers himself with light inform of garment, I thank you because you spare my life from morning till this night. God of salvation before I goto bed this night I am putting my body and soul in your hands, please protect me from all evil over the night, do not let me be found dead before morning, protect me from any nightmare that will lead to illness, let me sleep with joy and wake up with joy. O Lord the conquerer, come help me conquer my enemies and evil spirits, turn all evil power against me to waste and bestow unto me miraculous power. Guid me round with your light angels and let me wake up to life with joy and happiness. Amen.",
          notice: " ",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-5.jpg"
          }
        },
        {
          prayer: "PRAYER FOR BLESSING",
          excerpt: "O Lord my God, miraculous God, God of blessing... ",
          content:
            "O Lord my God, miraculous God, God of blessing, you that showed the Israelites miraculous power and huge mercy in the widerness, you commanded water to flow out of rock and you send down the rain of manna for the Israelites which they eat to the full of their stomach and even reserved. I raise up my face unto you, I plead to you o Lord, rain your blessing on me today. Mount the foundation of my work/business firmly to the ground and let me rip huge profit from it, let me encounter success on my path. The most powerful God, you have showed your miraculous work through the savior who blessed five loafs of bread and two fish that thousands of Israelites ate to the full of their stomach. Mark 6: 34 -44, you are the one I’m pleading to, come bless me and my family right now, transform my work to world class and grant me everlasting blessing. Let my needs be sufficient and surplus, let your grace be with me forever and ever. Answer all my prayers today. Amen",
          notice:
            "You have to say this prayer of blessing to God with all mind together with believe to God all the time. Say this prayer repeatedly in the morning for three days.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"
          }
        }
      ]
    };
  } // constructor ends

  renderRow(restaurant) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Details", {
            notice: restaurant.notice,
            content: restaurant.content,
            prayer: restaurant.prayer,
            image: restaurant.image.url
          })
        }
      >
        <Row>
          <Image
            styleName="small-avatar top"
            source={{ uri: restaurant.image.url }}
          />
          <View styleName="vertical">
            <View styleName="horizontal space-between">
              <Subtitle styleName="bold">{restaurant.prayer}</Subtitle>
            </View>
            <Text styleName="multiline"> {restaurant.excerpt} </Text>
          </View>
        </Row>
      </TouchableOpacity>
    );
  }
  render() {
    const restaurants = this.state.restaurants;
    return (
      <Screen>
        <ListView data={restaurants} renderRow={this.renderRow} />
      </Screen>
    );
  }
}

export default (PrayerStack = createStackNavigator(
  {
    Home: {
      screen: prayerScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "green"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        title: "Prayers",
        headerRight: (
          <Button
            onPress={() => alert("This is a button!")}
            title="Info"
            color="#fff"
          />
        )
      })
    },
    Details: {
      screen: PrayerDetail,
      navigationOptions: () => {
        return {
          headerStyle: {
            backgroundColor: "green"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        };
      }
    }
  },
  {
    initialRouteName: "Home"
  }
));
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
  },
  bold: {
    fontWeight: "500"
  },
  blackBackground: {
    backgroundColor: "black"
  }
});
