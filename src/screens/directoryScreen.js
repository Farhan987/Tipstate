import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Item, Icon, Input, Card } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import { MEDIUM, SMALL } from "../font/font";
import CustomDirectoryCard from "../component/CustomComponents/DirectoryCardView/CustomDirectoryCard";

let logo1 = require("../images/tec1.jpg");
let logo2 = require("../images/tec2.jpg");
let logo3 = require("../images/tec3.jpg");

export default class DirectoryScreeen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Directorio</Text>
          </View>

          <View style={{ height: 15 }} />
          <View style={styles.viewStyle1}>
            <Item style={styles.searchBarStyle}>
              <Icon name="ios-search" style={{ marginLeft: 15 }} />
              <Input placeholder="Search Here" />
            </Item>
          </View>

          <CustomDirectoryCard logoImage={logo1} />
          <CustomDirectoryCard logoImage={logo2} />
          <CustomDirectoryCard logoImage={logo3} />
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleViewStyle: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: BLACK
  },

  textViewStyle: {
    height: 30,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: MEDIUM,
    color: BLACK
  },
  viewStyle1: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBarStyle: {
    backgroundColor: "#EAEAEA",
    alignSelf: "center",
    width: "90%",
    height: 50,
    borderRadius: 30
  }
});
