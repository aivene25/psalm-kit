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
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import PsalmDetail from './psalmDetail';
import {
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

//type Props = {};
class psalmsScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [
        {
          name: "Psalm One",
          title:
            "TO RESCUE PREGNANT WOMEN FORM ILLNESS AND PREMATURE DELIVERY ... ",
          psalm:
            "If a woman is pregnant and she is the type that fall sick often or she’s having illness which  might lead to premature birth delivery. Then she has to learn the first three verses of this Psalm with the holy name EEL CHAD.",
          prayer:
            "O Lord, God of mercy, EEL CHAD answer my prayer, (mention the pregnant woman’s name) _________________ daughter of  _______________ (Pregnant woman’s mother name), deliver me from all evil also from premature birth delivery. Complete wellness is now mine and the unborn child from this moment to my real delivery date. Protect me & the unborn child and let me put to bed with joy. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
          }
        },
        {
          name: "Psalm Two",
          title: "TO CONQUER DANGER OR HEAVY STORM ...",
          psalm:
            "If you find yourself in a dangerous place or if storm hit the ship you board whether on sea or ocean. When fear cover everywhere, then you have to read this Psalm. Say the prayer then you read.",
          prayer:
            "Powerful God, king of holy SCADDEI, let the stoppage of this storm be your wish o Lord, take us to our final destination safely, because you are the only one that posses power, you are the only king of salvation. Rescue us with your holy name. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
          }
        },
        {
          name: "Psalm Three",
          title: "FOR TERRIBLE MIGRANE & BACKPAIN ...",
          psalm:
            "Anyone that back pains or migrane often. You have to read this Psalm with the holy name ADON with prayer on the olive oil, after reading this Psalm and prayer on the olive oil, rub the painful spot with the olive oil.",
          prayer:
            "O lord, God of ADON, the owner of heaven and earth, let it be your wish to heal me from this backpain and migrane, because you are my helper and saviour. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        },
        {
          name: "Psalm Four",
          title: "TO BE SUCCESSFUL BY ALL MEANS ...",
          psalm:
            "Any fellow who seems not to be successful in whatever he or she lay hands on or at work Then you have to read this Psalm 3 times with all your heart, lower voice and very strong believe in God. Every morning before the sunrise for three days or seven days with the holy name JIHEJE along with the prayer below.",
          prayer:
            "King of kings, God of mercy, holy God of JIHEJE, let it be your wish to transform all my rough path to smooth path including my work and career answer my prayer, grant my wishes today o Lord, because of your holy powerful name. Amen .",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"
          }
        },
        {
          name: "Psalm Five",
          title:
            "TO GAIN FAVOUR FROM PEOPLE AND TO BE SUCCESFUL WITH NEW ESTABLISHMENT ...",
          psalm:
            "IF you are going to ask someone a favour or you are planning to establish a business or mount an asset/assets and you want it to be successful. Make read Psalm 4.  You read this Psalm 3 times with all your heart, lower voice and very strong believe in God. Every morning before sunrise for 3 or 7 day with the holy name JIHEJE along with the prayer below.",
          prayer:
            "King of kings, merciful God, holy God of JIHEJE, then you proceed with the appropriate prayers. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-5.jpg"
          }
        },
        {
          name: "Psalm Six",
          title: "TO WIN A CASE IN COURT ... ",
          psalm:
            "If you have a case before the the judge or panel and you want them to favor you. Read this Psalm 3 times with the holy name CHINANJA on your hand spread in-front of you, after the prayer rub your palm to your face ,legs and your palms together. And say to yourself that the judge should have mercy on you,listen to you and you should be set free. With belief.",
          prayer:
            "Before you read this Psalm, call the holy name 1 time or 3 times before reading the Psalm. And this prayer is best when the sun is about to rise and when is about to set.          Another important way we can use this Psalm 5 is that, if someone encounters blockage maybe at work . it is important you use this Psalm everyday with appropriate prayers.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"
          }
        },
        {
          name: "Psalm Seven",
          title: "CURE FOR EYE PROBLEM ...",
          psalm:
            "Read this Psalm with all your heart and every eye problem in you will disappear. Read this Psalm repeatedly and often for 3 day, always call the holy name JASCHAJA before reading the Psalm. Then use lower voice to say the prayer below 7 times. Always have the holy name JASCHAJA strongly on your mind.",
          prayer:
            "Powerful God, king of holy SCADDEI, let the stoppage of this storm be your wish o Lord, take us to our final destination safely, because you are the only one that posses power, you are the only king of salvation. Rescue us with your holy name. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"
          }
        },
        {
          name: "Psalm Eight",
          title: "TO CONQUER ENEMIES...",
          psalm:
            "If the enemies are disturbing you, trying to harm you, trying to cut your life short or they are trying to impeach you, then you have to read this Psalm always along with the holy name EEL ELIJON on your mind. Always say the prayer below with the Psalm. Doing this, every evil thought, plan or act against you will go back to them and they will stop disturbing you.            ",
          prayer:
            "Powerful God, mighty God of EEL SILIJION, let it be your wish and power to change the mind of my enemies to do me good instead of bad, as you did it for your messenger, Abraham who cry out to you with this holy names. Amen.",
          image: {
            url:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        }
      ]
    };
  } // constructor ends

  renderRow(restaurant) {
    /*
    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
          style={{width: 400, height: 400}}
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
    */
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Details", {
            name: restaurant.name,
            title: restaurant.title,
            psalm: restaurant.psalm,
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
              <Subtitle styleName="bold">{restaurant.name}</Subtitle>
            </View>
            <Text styleName="multiline"> {restaurant.title} </Text>
          </View>
        </Row>
      </TouchableOpacity>
    );
  }
  render() {
    const restaurants = this.state.restaurants;
    return (
      <View>
        <ListView data={restaurants} renderRow={this.renderRow} />
      </View>
    );
  }
}

export default (PsalmsStack = createStackNavigator(
  {
    Home: {
      screen: psalmsScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "green"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        title: "Psalms",
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
      screen: PsalmDetail,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "green"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      })
    }
  },
  {
    initialRouteName: "Home"
    /* The header config from HomeScreen is now here */
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
  }
});
