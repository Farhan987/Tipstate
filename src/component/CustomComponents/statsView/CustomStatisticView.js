import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Icon } from "native-base";
import { WHITE } from "../../../theme/colors";
import { SMALL } from "../../../font/font";

export default class CustomStatisticsView extends Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={styles.iconViewStyle}>
          <Icon
            name={this.props.IconName ? this.props.IconName : "home"}
            type="FontAwesome"
            style={[
              styles.iconStyle,
              { fontSize: this.props.fontSize ? this.props.fontSize : 50 }
            ]}
          />
        </View>
        <View style={styles.textsViewStyle}>
          <Text style={styles.priceTextStyle}>$3,020,000.00 MN</Text>
          <Text style={styles.descriptionTextStyle}>
            PRECIO PROMEDIO DE VENTA
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    width: "90%",
    height: 80,
    alignSelf: "center",
    flexDirection: "row"
  },
  iconViewStyle: { flex: 1, justifyContent: "center", alignItems: "center" },

  iconStyle: {
    textAlign: "center",
    color: WHITE,
    color: "orange"
  },
  textsViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  priceTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "5%" },
  descriptionTextStyle: { fontSize: SMALL, marginLeft: "5%", color: "#979797" }
});
