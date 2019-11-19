import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Button
} from "native-base";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MapScreen from "../screens/houseCurrentLocationScreen";
import FavoriteHouseScreem from "../screens/favoriteHouseScreem";
import AddNewPropertiesScreen from "../screens/newPropertiesScreen";
import ComaprisonHouseScreen from "../screens/comaprisonHouseScreen";
import FirstChatScreen from "../screens/chatScreens/firstChatScreen";
import { WHITE } from "../theme/colors";

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Tabs
            tabBarPosition="bottom"
            tabBarUnderlineStyle={{ backgroundColor: "#979797" }}
          >
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="home"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Inicio</Text>
                </TabHeading>
              }
            >
              <MapScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="heart-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Favoritos</Text>
                </TabHeading>
              }
            >
              <FavoriteHouseScreem navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="plus-square-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>publicar</Text>
                </TabHeading>
              }
            >
              <AddNewPropertiesScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="balance-scale"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Comparar</Text>
                </TabHeading>
              }
            >
              <ComaprisonHouseScreen navigation={this.props.navigation} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.TabHeading}>
                  <Icon
                    style={styles.footerIconStyle}
                    name="comment-o"
                    type="FontAwesome"
                  />
                  <Text style={styles.footerTextStyle}>Mensajes</Text>
                </TabHeading>
              }
            >
              <FirstChatScreen navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  footerTextStyle: { fontSize: 10, color: "#979797" },
  footerIconStyle: { color: "#979797", fontSize: 20 },
  TabHeading: (style = { flexDirection: "column", backgroundColor: WHITE })
});
