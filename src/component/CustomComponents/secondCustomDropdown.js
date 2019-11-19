import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Picker, Item } from "native-base";
import { CUSTOM_FEILD_COLOR, BLACK, WHITE } from "../../theme/colors";
import { MEDIUM } from "../../font/font";

export default class SecondCustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Item
        regular
        style={{
          borderColor: WHITE,
          borderRadius: 8,
          height: this.props.Inputheight ? this.props.Inputheight : 45,
          width: this.props.width ? this.props.width : "91%",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "#F6F6F6"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: this.props.marginLeft ? this.props.marginLeft : 0
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: MEDIUM,
              color: this.props.placeholderColor
                ? this.props.placeholderColor
                : BLACK
            }}
          >
            {this.props.title ? this.props.title : ""}
          </Text>
        </View>
        <View style={{ flex: 19 }}>
          <Picker
            placeholder={this.props.title ? this.props.title : ""}
            mode="dropdown"
            iosHeader="Sort By"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Distance" value="key0" />
            <Picker.Item label="Price" value="key1" />
            <Picker.Item label="Space" value="key2" />
          </Picker>
        </View>
      </Item>
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
