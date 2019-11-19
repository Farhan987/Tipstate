import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";

export default class MapScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.buttonsOuterViewStyle}>
            <View style={styles.menuFlexStyle}>
              <Button rounded style={styles.menuButtonStyle}>
                <Icon
                  name="bars"
                  type="FontAwesome"
                  style={styles.menu_mapIconStyle}
                />
              </Button>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.mapFlexStyle}>
              <Button light rounded style={styles.mapButtonStyle}>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={styles.menu_mapIconStyle}
                />
              </Button>
            </View>
            <View style={styles.buscarFlexStyle}>
              <Button iconLeft rounded style={styles.buscarButtonStyle}>
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{ fontSize: LARGE, fontSize: 18 }}
                />
                <Text>Buscar</Text>
              </Button>
            </View>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: "100%", height: 500 }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          ></MapView>
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonsOuterViewStyle: {
    height: 80,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  menuFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  menuButtonStyle: {
    height: 45,
    width: 45,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  menu_mapIconStyle: { color: WHITE, fontSize: 18 },
  mapButtonStyle: {
    height: 45,
    width: 45,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  mapFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buscarFlexStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttonViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buscarButtonStyle: {
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignSelf: "flex-end",
    height: 43
  },
  buttonStyle: {
    width: "80%",
    height: "70%",
    backgroundColor: "#132D43",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonIconStyle: {
    flex: 1,
    textAlign: "center",
    color: WHITE,
    fontSize: LARGE
  },
  buttonTextStyle: { flex: 3, color: WHITE, fontSize: MEDIUM }
});
