import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BLACK, WHITE } from "../../../theme/colors";
import { MEDIUM, LARGE } from "../../../font/font";

export default class CustomScalingView extends Component {
  render() {
    return (
      <View>
        {/* accessoriesScaling */}
        <View
          style={[
            styles.accessoriesOuterViewStyle,
            {
              backgroundColor: this.props.backgroundColor
                ? this.props.backgroundColor
                : "white"
            }
          ]}
        >
          <View style={styles.accessoriesScalingViewStyle}>
            <Text style={styles.accessoriesScalingTextViewStyle}>
              {this.props.leftSideText}
            </Text>
          </View>
          <View style={styles.accessoriesScalingViewStyle}>
            <Text style={styles.accessoriesScalingTextViewStyle}>
              {this.props.rightSideText}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accessoriesOuterViewStyle: {
    height: 35,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  accessoriesScalingViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  accessoriesScalingTextViewStyle: { fontWeight: "bold", fontSize: 18 }
});
