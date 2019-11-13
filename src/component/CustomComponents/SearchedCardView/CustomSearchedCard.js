import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Icon, Card } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BLACK } from "../../../theme/colors";
import { MEDIUM, SMALL } from "../../../font/font";

export default class CustomSearchCard extends Component {
  render() {
    return (
      <View>
        <View style={{ height: 15 }} />
        <Card style={styles.cardStyle}>
          <View style={{ flex: 1 }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapStyle}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
            ></MapView>
          </View>
          <View style={{ flex: 1.2 }}>
            <View style={styles.textsViewStyle}>
              <Text style={styles.terrazaTextStyle}>Casas con Terraza</Text>
              <Text style={styles.pedregalTextStyle}>
                Privadas del pedregal
              </Text>
              <Text style={styles.privadaTextStyle}>Privada</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <TouchableOpacity>
                <Icon
                  name="share-alt"
                  type="FontAwesome"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
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
    height: 150,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row"
  },
  mapStyle: { width: "100%", height: 150 },
  textsViewStyle: {
    height: 100,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  terrazaTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "5%" },
  pedregalTextStyle: { fontSize: MEDIUM, marginLeft: "5%" },
  privadaTextStyle: { fontSize: SMALL, marginLeft: "5%" },
  iconViewStyle: {
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  iconStyle: { color: BLACK, marginRight: "5%" }
});
