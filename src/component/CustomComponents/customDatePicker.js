import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, DatePicker } from "native-base";
import { CUSTOM_FEILD_COLOR } from "../../theme/colors";
import { LARGE } from "../../font/font";

export default class CustomDatePicker extends Component {
  state = { chosenDate: new Date(), setDate: "" };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  render() {
    return (
      <View
        style={{
          height: 35,
          marginTop: 10,
          width: 150,
          borderRadius: 8,
          backgroundColor: "#EAEAEA",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10
        }}
      >
        <DatePicker
          androidMode={"spinner"}
          defaultDate={new Date(1995, 1, 1)}
          minimumDate={new Date(1990, 1, 1)}
          maximumDate={new Date(2002, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"slide"}
          placeHolderTextStyle={{ color: "black" }}
          placeHolderText="D|M|Y"
          textStyle={{ color: "black" }}
          placeHolderTextStyle={{ color: "black" }}
          onDateChange={this.state.setDate}
          disabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
