import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";
import CustomMyPropertyPageTitle from "../component/CustomComponents/CustomMyPropertyPageTitle/CustomMyPropertyTitle";
import SecondCustomHouseView from "../component/CustomComponents/HouseView/CustomHouseView2";

export default class MyPropertiesListScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <CustomMyPropertyPageTitle />
          <View style={styles.buttonsOuterViewStyle}>
            <View style={styles.map1FlexStyle}>
              <Button
                rounded
                style={styles.map1ButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("PropertiesMapViewScreen")
                }
              >
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={styles.map1_map2IconStyle}
                />
              </Button>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.buscarFlexStyle}>
              <Button
                iconLeft
                rounded
                style={styles.buscarButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("SearchingFormScreen")
                }
              >
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{ fontSize: LARGE }}
                />
                <Text>Buscar</Text>
              </Button>
            </View>
          </View>

          {/* Custom List View Card */}
          <SecondCustomHouseView navigation={this.props.navigation} />
          <SecondCustomHouseView navigation={this.props.navigation} />
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonsOuterViewStyle: {
    height: 50,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  map1FlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  map1ButtonStyle: {
    height: 50,
    width: 50,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  map1_map2IconStyle: { color: WHITE, fontSize: LARGE },
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
    alignSelf: "flex-end"
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
