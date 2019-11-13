import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BLACK } from "../../../theme/colors";
import { MEDIUM } from "../../../font/font";

export default class CustomMyPropertyPageTitle extends Component {
  render() {
    return (
      <View style={styles.titleViewStyle}>
        <View style={styles.leftViewStyle}>
          <Text style={styles.titleStyle}>Mis Propiedades</Text>
        </View>

        <View style={styles.rightViewStyle}>
          <Text style={styles.textStyle}>18 Propiedades</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleViewStyle: {
    height: 70,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  leftViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: BLACK
  },
  rightViewStyle: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  textStyle: {
    fontSize: MEDIUM,
    color: BLACK
  }
});
