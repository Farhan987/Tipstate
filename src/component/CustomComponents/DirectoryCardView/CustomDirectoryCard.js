import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text, Icon, Card } from "native-base";
import { BLACK } from "../../../theme/colors";
import { MEDIUM, SMALL } from "../../../font/font";

export default class CustomDirectoryCard extends Component {
  render() {
    return (
      <View>
        <View style={{ height: 15 }} />
        <Card style={styles.cardStyle}>
          <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={this.props.logoImage} />
          </View>
          <View style={{ flex: 1.2 }}>
            <View style={styles.textsViewStyle}>
              <Text style={styles.neuronTextStyle}>Neuron Inmobiliaria</Text>
              <Text style={styles.telefonoTextStyle}>Telefono</Text>
              <Text style={styles.smallTextStyle}>8-1011-32-11</Text>
              <Text style={styles.smallTextStyle}>876655</Text>
              <Text style={styles.smallTextStyle}>88348067185</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#EAEAEA"
  },
  imageViewStyle: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageStyle: {
    width: "80%",
    height: "70%"
  },
  textsViewStyle: {
    height: 170,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  neuronTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "5%" },
  telefonoTextStyle: { fontSize: MEDIUM, marginLeft: "5%" },
  smallTextStyle: { fontSize: SMALL, marginLeft: "5%", color: "#979797" }
});
