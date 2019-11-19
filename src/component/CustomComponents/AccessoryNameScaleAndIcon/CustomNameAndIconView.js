import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

export default class CustomNameAndIconView extends Component {
  render() {
    return (
      <View>
        {/* accessoriesDetail */}
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
          {/* leftSideAccessories */}
          <View style={styles.accessoriesMainInnerViewStyle}>
            <View style={styles.accessoriesIconViewStyle}>
              <Icon
                name={
                  this.props.leftIconName ? this.props.leftIconName : "home"
                }
                type="FontAwesome"
                style={{
                  color: "orange",
                  fontSize: this.props.iconfontSize
                    ? this.props.iconfontSize
                    : 25
                }}
              />
            </View>

            <View style={styles.accessoriesTextViewStyle}>
              <Text>{this.props.leftSideText}</Text>
            </View>
          </View>

          {/* rightSideccessories */}
          <View style={styles.accessoriesMainInnerViewStyle}>
            <View style={styles.accessoriesIconViewStyle}>
              <Icon
                name={
                  this.props.rightIconName ? this.props.rightIconName : "home"
                }
                type="FontAwesome"
                style={{
                  color: "orange",
                  fontSize: this.props.iconfontSize
                    ? this.props.iconfontSize
                    : 25
                }}
              />
            </View>

            <View style={styles.accessoriesTextViewStyle}>
              <Text>{this.props.rightSideText}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accessoriesOuterViewStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  accessoriesMainInnerViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  accessoriesIconViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  accessoriesTextViewStyle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
