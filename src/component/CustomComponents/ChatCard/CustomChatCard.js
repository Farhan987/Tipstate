import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text, Icon } from "native-base";

export default class CustomChatCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("SecondChatScreen")}
      >
        <View style={{ height: 20 }} />
        <View style={styles.chatCardMainViewStyle}>
          <View style={styles.ImageViewStyle}>
            <Image style={styles.imageStyle} source={this.props.profileImage} />
          </View>

          <View style={styles.textsOutterViewStyle}>
            <View style={styles.nameViewStyle}>
              <Text style={{ fontWeight: "bold" }}>Constructora Nobla</Text>
            </View>

            <View style={styles.messageTextViewStyle}>
              <Text style={{ color: "#979797" }}>
                Buen día, le escribo por...
              </Text>
            </View>
          </View>

          <View style={styles.dateTextViewStyle}>
            <Text style={{ fontSize: 13 }}>30/09/19</Text>
          </View>

          <View style={styles.menuIconViewStyle}>
            <TouchableOpacity>
              <Icon
                name="ellipsis-v"
                type="FontAwesome"
                style={{ color: "#979797" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  chatCardMainViewStyle: {
    height: 80,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  ImageViewStyle: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  textsOutterViewStyle: {
    flex: 4
  },
  nameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  messageTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  dateTextViewStyle: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  menuIconViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10
  }
});
