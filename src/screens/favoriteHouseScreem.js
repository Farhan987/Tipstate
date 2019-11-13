import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE, BLACK } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";
import CustomHouseView from "../component/CustomComponents/HouseView/CustomHouseView";
import CustomDropdown from "../component/CustomComponents/customDropdown";

export default class FavoriteHouseScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Favoritos</Text>
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
  titleViewStyle: {
    height: 50,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: BLACK
  },
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
