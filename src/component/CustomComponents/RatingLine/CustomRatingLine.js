import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import { BLACK } from "../../../theme/colors";

export default class CustomRatingLine extends Component {
  render() {
    return (
      <View>
        {/* lastRatings */}
        <View style={styles.viewStyle2}>
          <View style={styles.ratingTextViewStyle}>
            <Text style={{ color: BLACK }}>{this.props.text}</Text>
          </View>
          <View style={{ flex: 1.2 }}>
            <View style={styles.stericsViewStyle}>
              <View style={styles.stericViewStyle1}>
                <View style={styles.stericButtonStyle1}>
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={styles.filledStericIconStyle1}
                  />
                </View>
                <View style={styles.stericButtonStyle1}>
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={styles.filledStericIconStyle1}
                  />
                </View>
                <View style={styles.stericButtonStyle1}>
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={styles.filledStericIconStyle1}
                  />
                </View>
                <View style={styles.stericButtonStyle1}>
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={styles.filledStericIconStyle1}
                  />
                </View>
                <View style={styles.stericButtonStyle1}>
                  <Icon
                    name="star-o"
                    type="FontAwesome"
                    style={styles.unfillStericIconStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stericViewStyle: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "flex-start"
  },
  stericButtonStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  },
  unfillStericIconStyle: {
    color: "#979797",
    alignSelf: "center",
    fontSize: 22
  },
  filledStericIconStyle: { color: "orange", alignSelf: "center" },

  viewStyle1: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    flexDirection: "row"
  },
  filledStericIconStyle1: {
    color: "#122A3F",
    alignSelf: "center",
    fontSize: 22
  },

  viewStyle2: {
    width: "85%",
    height: 40,
    alignSelf: "center",
    flexDirection: "row"
  },
  ratingTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  stericsViewStyle: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  stericButtonStyle1: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1
  },
  stericViewStyle1: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "flex-end"
  }
});
