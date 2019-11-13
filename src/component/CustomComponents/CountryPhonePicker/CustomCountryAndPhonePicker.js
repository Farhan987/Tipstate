import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CountryPicker, {
  getAllCountries
} from "react-native-country-picker-modal";

const NORTH_AMERICA = ["NG", "GH", "SL", "GM", "LR"];

class CustomCountryAndPhonePicker extends Component {
  constructor(props) {
    super(props);
    let userLocaleCountryCode = null;
    const userCountryData = getAllCountries()
      .filter(country => NORTH_AMERICA.includes(country.cca2))
      .filter(country => country.cca2 === userLocaleCountryCode)
      .pop();
    let callingCode = null;
    let cca2 = userLocaleCountryCode;
    if (!cca2 || !userCountryData) {
      cca2 = "NG";
      callingCode = "234";
    } else {
      callingCode = userCountryData.callingCode;
    }
    this.state = {
      cca2,
      callingCode,
      code: ""
    };
  }

  render() {
    return (
      <View>
        <View style={styles.phoneMainViewStyle}>
          <View style={styles.countryPickerViewStyle}>
            <CountryPicker
              hideAlphabetFilter={true}
              countryList={NORTH_AMERICA}
              onChange={value => {
                this.setState({
                  cca2: value.cca2,
                  callingCode: value.callingCode
                });
              }}
              cca2={this.state.cca2}
              translation="eng"
            />
          </View>
          <View style={{ width: 5 }}></View>
          <View style={styles.phoneNumberOuterViewStyle}>
            <View style={{ marginLeft: 65 }}></View>
            <Text style={{ fontFamily: "mont", fontSize: 14 }}>+</Text>
            <Text style={{ fontFamily: "mont", fontSize: 14 }}>
              {this.state.callingCode}
            </Text>
            <TextInput
              fontsize={14}
              maxLength={10}
              keyboardType={"numeric"}
              placeholder={"Ingresa tu número celular"}
              style={styles.textInputStyle}
            ></TextInput>
          </View>
        </View>
      </View>
    );
  }
}
export default CustomCountryAndPhonePicker;

const styles = StyleSheet.create({
  phoneMainViewStyle: {
    flexDirection: "row",
    width: "90%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "red"
  },
  countryPickerViewStyle: {
    flexDirection: "row",
    height: 45,
    width: "18%",
    backgroundColor: "#F6F6F6",
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1
  },
  phoneNumberOuterViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "72%",
    backgroundColor: "#F6F6F6",
    elevation: 1,
    borderRadius: 10,
    flex: 4
  },
  textInputStyle: {
    width: "100%",
    height: "100%",
    marginLeft: 10,
    fontFamily: "mont"
  }
});
