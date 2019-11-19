import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Text } from "native-base";
import { GREY, WHITE } from "../../../theme/colors";
import { LARGE, MEDIUM } from "../../../font/font";

class CustomButton extends Component {
  state = {};
  render() {
    return (
      // <Button
      //   onPress={this.props.onPress ? this.props.onPress : text => false}
      //   style={{
      //     width: "90%",
      //     backgroundColor: this.props.backgroundColor
      //       ? this.props.backgroundColor
      //       : WHITE,
      //     alignSelf: "center",
      //     justifyContent: "center",
      //     height: 50,
      //     borderRadius: 10
      //   }}
      // >
      //   <Text
      //     style={{
      //       fontSize: MEDIUM,
      //       alignSelf: "center",
      //       color: this.props.color ? this.props.color : "#00000"
      //     }}
      //   >
      //     {this.props.Text ? this.props.Text : "Press"}
      //   </Text>
      // </Button>

      <View style={styles.buttonViewStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[
            styles.buttonStyle,
            {
              width: this.props.width ? this.props.width : "90%",
              height: this.props.height ? this.props.height : "80%",
              backgroundColor: this.props.backgroundColor
                ? this.props.backgroundColor
                : "#132D43"
            }
          ]}
        >
          <Icon
            name={this.props.IconName ? this.props.IconName : "bar-chart"}
            type="FontAwesome"
            style={styles.buttonIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            {this.props.buttonText ? this.props.buttonText : "No Name"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonViewStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
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
  buttonTextStyle: { flex: 6, color: WHITE, fontSize: 14 }
});
