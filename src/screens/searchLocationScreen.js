import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Item, Icon, Input, Card } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import { MEDIUM } from "../font/font";
import CustomSearchCard from "../component/CustomComponents/SearchedCardView/CustomSearchedCard";

export default class SearchLocationScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Busquedas</Text>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>
              Comparte Busquedas a tus clientes
            </Text>
          </View>

          <View style={{ height: 15 }} />
          <View style={styles.viewStyle1}>
            <Item style={styles.searchBarStyle}>
              <Icon name="ios-search" style={{ marginLeft: 15 }} />
              <Input placeholder="Search Here" />
            </Item>
          </View>

          <CustomSearchCard />
          <CustomSearchCard />
        </Content>
        <CustomFooter />
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
