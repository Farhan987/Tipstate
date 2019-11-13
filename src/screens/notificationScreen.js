import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";

export default class NotificationScreeen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Notificaciones</Text>
          </View>
          <View style={{ height: 10 }} />
          <TouchableOpacity style={styles.notificationButtonStyle}>
            <Text style={{ textAlign: "center" }}>
              Tu departamento de Carranza se ha rentado
            </Text>
          </TouchableOpacity>
          <View style={{ height: 15 }} />
          <TouchableOpacity style={styles.notificationButtonStyle}>
            <Text style={{ textAlign: "center" }}>
              sadasd asetytyyjj erwertry yiiu
            </Text>
          </TouchableOpacity>
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
  notificationButtonStyle: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#979797",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
