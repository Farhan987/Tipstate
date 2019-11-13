import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  PixelRatio
} from "react-native";
import CountryPicker, {
  getAllCountries
} from "react-native-country-picker-modal";

const NORTH_AMERICA = ["NG", "GH", "SL", "GM", "LR"];

class StepOne extends Component {
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
        <View style={{ width: "100%", height: "25%" }}></View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "10%",
            justifyContent: "center",
            backgroundColor: "red"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 45,
              width: "18%",
              backgroundColor: "#fff",
              elevation: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
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
          </View>
          <View style={{ width: 5 }}></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 45,
              width: "72%",
              backgroundColor: "#fff",
              elevation: 1,
              borderRadius: 10
            }}
          >
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
              style={{
                width: "100%",
                height: "100%",
                marginLeft: 10,
                fontFamily: "mont"
              }}
            ></TextInput>
          </View>
        </View>
      </View>
    );
  }
}
export default StepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f7f7"
  },
  buttonGreen: {
    width: 110,
    height: 45,
    backgroundColor: "#33c360",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWhite: {
    width: 110,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#33c360",
    borderWidth: 1
  }
});
