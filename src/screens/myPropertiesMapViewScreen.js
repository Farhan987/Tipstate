import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
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
        <CustomHeader navigation={this.props.navigation} />
        <CustomMyPropertyPageTitle />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("PropertiesListScreen")
            }
            style={styles.searchButtonStyle}
          >
            <Icon
              style={{ color: "white", fontSize: 22 }}
              name="bars"
              type="FontAwesome"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("SearchingFormScreen")
            }
            style={styles.barsButtonStyle}
          >
            <Icon style={{ color: "white" }} name="search" />
          </TouchableOpacity>

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
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchButtonStyle: {
    position: "absolute",
    zIndex: 999,
    left: 20,
    top: 20,
    backgroundColor: "#132D43",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  barsButtonStyle: {
    position: "absolute",
    zIndex: 999,
    right: 20,
    top: 20,
    backgroundColor: "#132D43",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
