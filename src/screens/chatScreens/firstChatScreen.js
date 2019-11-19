import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Container, Content, Text, Item, Icon, Input, Card } from "native-base";
import CustomHeader from "../../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../../theme/colors";
import { MEDIUM, SMALL } from "../../font/font";
import CustomDirectoryCard from "../../component/CustomComponents/DirectoryCardView/CustomDirectoryCard";
import CustomChatCard from "../../component/CustomComponents/ChatCard/CustomChatCard";

let pic1 = require("../../images/tec1.jpg");
let pic2 = require("../../images/tec2.jpg");
let pic3 = require("../../images/tec3.jpg");

export default class ChatScreenOne extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mensajes</Text>
          </View>

          <View style={{ height: 15 }} />
          <View style={styles.viewStyle1}>
            <Item style={styles.searchBarStyle}>
              <Icon name="ios-search" style={{ marginLeft: 15 }} />
              <Input placeholder="Buscar Conversación" />
            </Item>
          </View>

          <View style={{ height: 10 }} />
          <CustomChatCard
            profileImage={pic1}
            navigation={this.props.navigation}
          />
          <CustomChatCard
            profileImage={pic2}
            navigation={this.props.navigation}
          />
          <CustomChatCard
            profileImage={pic3}
            navigation={this.props.navigation}
          />
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
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    width: "92%",
    height: 60,
    borderRadius: 30
  },

  chatCardMainViewStyle: {
    height: 100,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  ImageViewStyle: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  textsOutterViewStyle: {
    flex: 4
  },
  nameViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  messageTextViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  dateTextViewStyle: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  menuIconViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
