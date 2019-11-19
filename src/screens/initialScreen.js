import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import CustomButton from "../component/CustomComponents/Button/CustomerButton";

export default class InitialScreen extends Component {
  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={require("../images/backPic.jpg")}
        style={styles.imageBackgroundStyle}
      >
        <View style={{ height: 100 }} />
        <Image
          style={styles.imageStyle}
          source={require("../images/logo.png")}
        />
        <View style={{ height: 50 }} />
        <CustomButton
          onPress={() => this.props.navigation.navigate("HomeTabView")}
          width="75%"
          height="70%"
          IconName="search"
          buttonText="Busqueda por Ubicación"
        />
        <CustomButton
          onPress={() => this.props.navigation.navigate("HomeTabView")}
          width="75%"
          height="70%"
          IconName="map-marker"
          buttonText="Busqueda por Ubicación Actual"
          backgroundColor="#EEA823"
        />
        <View style={{ height: 180 }} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundStyle: { flex: 1, justifyContent: "center", opacity: 0.9 },
  imageStyle: {
    height: 70,
    width: 200,
    alignSelf: "center"
  }
});
