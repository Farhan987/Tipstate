import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE, BLACK } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";
import CustomHouseView from "../component/CustomComponents/HouseView/CustomHouseView";
import CustomDropdown from "../component/CustomComponents/customDropdown";

export default class ListViewScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.buttonsOuterViewStyle}>
            <View style={styles.map1FlexStyle}>
              <Button rounded style={styles.map1ButtonStyle}>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={styles.map1_map2IconStyle}
                />
              </Button>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.map2FlexStyle}>
              <Button light rounded style={styles.map2ButtonStyle}>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={styles.map1_map2IconStyle}
                />
              </Button>
            </View>
            <View style={styles.buscarFlexStyle}>
              <Button iconLeft rounded style={styles.buscarButtonStyle}>
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{ fontSize: LARGE }}
                />
                <Text>Buscar</Text>
              </Button>
            </View>
          </View>

          <View style={styles.dropDownOuterViewStyle}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textStyle}>40 Propiedades</Text>
            </View>
            <View style={styles.dropDownViewStyle}>
              <CustomDropdown title="Ordenar por:" />
            </View>
          </View>

          {/* Custom List View Card */}
          <CustomHouseView />
          <CustomHouseView />
        </Content>
        <CustomFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonsOuterViewStyle: {
    height: 70,
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
  map2ButtonStyle: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  map2FlexStyle: {
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
  buttonTextStyle: { flex: 3, color: WHITE, fontSize: MEDIUM },
  dropDownOuterViewStyle: {
    height: 50,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  textViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  textStyle: { color: BLACK, fontSize: MEDIUM },
  dropDownViewStyle: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
