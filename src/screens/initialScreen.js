import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Container, Content, Icon, Right, Left, Button } from "native-base";
import CustomButton from "../component/CustomComponents/Button/CustomerButton";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";

export default class InitialScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={{ height: 100 }} />
          <Image
            style={styles.imageStyle}
            source={require("../images/logo.png")}
          />
          <View style={{ height: 50 }} />
          <CustomButton IconName="search" buttonText="Busqueda por Ubicación" />
          <CustomButton
            IconName="map-marker"
            buttonText="Busqueda por Ubicación Actual"
            backgroundColor="#EEA823"
          />
          <View style={{ height: 100 }} />
        </Content>
        <CustomFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: "25%",
    width: "70%",
    alignSelf: "center"
  }
});
