import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, Button, Text, Right, Left, Card } from "native-base";
import { WHITE } from "../../../theme/colors";
import { LARGE, MEDIUM } from "../../../font/font";

export default class SecondCustomHouseView extends Component {
  render() {
    return (
      <View>
        <View style={{ height: 10 }} />
        <Card style={styles.mainViewStyle}>
          <ImageBackground
            style={styles.imageBackgroundStyle1}
            imageStyle={styles.imageBackgroundStyle2}
            source={require("../../../images/profile.jpg")}
          >
            <View style={styles.iconsViewStyle}>
              <Right style={styles.rightTagStyle1}>
                <Button rounded style={styles.ventaButtonStyle}>
                  <Text> Venta </Text>
                </Button>
              </Right>
              <Left style={styles.leftTagStyle1}>
                <TouchableOpacity>
                  <Icon
                    name="balance-scale"
                    type="FontAwesome"
                    style={{ color: WHITE }}
                  />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <TouchableOpacity>
                  <Icon
                    name="share-alt"
                    type="FontAwesome"
                    style={{ color: WHITE }}
                  />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <TouchableOpacity>
                  <Icon
                    name="heart"
                    type="FontAwesome"
                    style={{ color: "red" }}
                  />
                </TouchableOpacity>
                <View style={{ width: 20 }} />
              </Left>
            </View>
          </ImageBackground>

          <View style={styles.contacterViewStyle}>
            <Right style={styles.rightTagStyle2}>
              <Text style={styles.priceTextStyle}>$4,250,000.00 MXN</Text>
            </Right>
            {/* <Left style={styles.leftTagStyle1}>
              <Button primary style={styles.contacterButtonStyle}>
                <Text style={{ textAlign: "center" }}>Contactar </Text>
              </Button>
            </Left> */}
          </View>

          <View style={styles.casaMainViewStyle}>
            <View style={styles.casaIconViewStyle}>
              <Icon name="home" style={styles.casaIconStyle} />
            </View>
            <View style={styles.casaTextViewStyle}>
              <Text style={{ color: "#979797" }}>Casa</Text>
            </View>
            <View style={{ flex: 5 }} />
          </View>

          <View style={{ height: 35, flexDirection: "row" }}>
            <Right style={styles.rightTagStyle1}>
              <Text style={styles.casaModeranaTextStyle}>Casa Moderna</Text>
            </Right>
            {/* <Left style={styles.leftTagStyle2}>
              <Button primary style={styles.masInfoButtonStyle}>
                <Text style={{ textAlign: "center" }}>Más Información </Text>
              </Button>
            </Left> */}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <Text style={{ color: "#979797", marginLeft: "3%" }}>
              SKU: 7779451200
            </Text>
          </View>

          <View style={{ height: 3 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>Ubicación</Text>
          </View>

          <View style={styles.locationMainViewStyle}>
            <View style={styles.mapIconViewStyle}>
              <Icon
                name="map-marker"
                type="FontAwesome"
                style={styles.mapIconStyle}
              />
            </View>
            <View style={styles.locationTextViewStyle}>
              <Text>
                Av. Himno Nacional #432 San Luis Potosí, SLP. México 78218
              </Text>
            </View>
          </View>

          <View style={{ height: 60, flexDirection: "row" }}>
            <View style={styles.buttonsOutterViewStyle}>
              <Button
                primary
                style={styles.masInfoButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("HouseDetailScreen")
                }
              >
                <Text style={{ textAlign: "center" }}>Más Información </Text>
              </Button>
            </View>

            <View style={styles.buttonsOutterViewStyle}>
              <Button style={styles.contacterButtonStyle}>
                <Text style={{ textAlign: "center" }}>Contactar </Text>
              </Button>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 415,
    width: "95%",
    alignSelf: "center",
    borderRadius: 15
  },
  imageBackgroundStyle1: {
    height: 150,
    justifyContent: "flex-end"
  },
  imageBackgroundStyle2: { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  iconsViewStyle: {
    height: 50,
    flexDirection: "row"
  },
  rightTagStyle1: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ventaButtonStyle: {
    height: 35,
    backgroundColor: "#0CAA12",
    marginLeft: "10%"
  },
  leftTagStyle1: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  contacterViewStyle: { height: 50, flexDirection: "row" },
  rightTagStyle2: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  priceTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "3%" },

  leftTagStyle2: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  casaMainViewStyle: {
    height: 20,
    flexDirection: "row"
  },
  casaIconViewStyle: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  casaIconStyle: {
    color: "orange",
    marginLeft: "22%"
  },
  casaTextViewStyle: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  casaModeranaTextStyle: {
    fontSize: LARGE,
    fontWeight: "bold",
    marginLeft: "3%"
  },

  ubicacionViewStyle: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ubicacionTextStyle: {
    fontSize: MEDIUM,
    fontWeight: "bold",
    marginLeft: "3%"
  },
  locationMainViewStyle: {
    height: 50,
    flexDirection: "row"
  },
  mapIconViewStyle: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  mapIconStyle: {
    color: "orange",
    marginLeft: "22%"
  },
  locationTextViewStyle: {
    flex: 5.8,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonsOutterViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  contacterButtonStyle: {
    height: 40,
    width: "80%",
    backgroundColor: "#EEA823",
    alignSelf: "center",
    justifyContent: "center"
  },
  masInfoButtonStyle: {
    height: 40,
    width: "80%",
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "center"
  }
});
