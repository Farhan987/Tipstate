import React, { Component } from "react";
import { Container, Header, View, Button, Icon, Fab } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";
import CustomMyPropertyPageTitle from "../component/CustomComponents/CustomMyPropertyPageTitle/CustomMyPropertyTitle";
export default class MyPropertiesMapViewScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <CustomMyPropertyPageTitle />
        <View style={{ flex: 1 }}>
          <Fab
            direction="left"
            containerStyle={{}}
            style={{ backgroundColor: "#132D43" }}
            position="topRight"
          >
            <Icon name="search" />
          </Fab>
          <Fab
            direction="left"
            containerStyle={{}}
            style={{ backgroundColor: "#132D43" }}
            position="topLeft"
          >
            <Icon name="bars" type="FontAwesome" />
          </Fab>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: "100%", height: 1000 }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          ></MapView>
        </View>
        <CustomFooter />
      </Container>
    );
  }
}
