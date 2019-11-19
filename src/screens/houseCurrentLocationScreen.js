import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Alert,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Button,
  Card,
  Right,
  Left,
  Text
} from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE } from "../theme/colors";
import { LARGE, MEDIUM } from "../font/font";

export default class CurrentLocationOfHouseScreen extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.buttonsOuterViewStyle}>
            <View style={styles.menuFlexStyle}>
              <Button
                rounded
                style={styles.menuButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("HouseListScreen")
                }
              >
                <Icon
                  name="bars"
                  type="FontAwesome"
                  style={styles.menu_mapIconStyle}
                />
              </Button>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.mapFlexStyle}>
              <Button light rounded style={styles.mapButtonStyle}>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={styles.menu_mapIconStyle}
                />
              </Button>
            </View>
            <View style={styles.buscarFlexStyle}>
              <Button
                iconLeft
                rounded
                style={styles.buscarButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("SearchingFormScreen")
                }
              >
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{ fontSize: LARGE }}
                />
                <Text>Buscar</Text>
              </Button>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            presentationStyle="pageSheet"
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.container1}>
              <View
                style={{ flex: 1, backgroundColor: "gray", opacity: 0.1 }}
              />
              <View style={styles.mainViewStyle}>
                <ScrollView>
                  <ImageBackground
                    style={styles.imageBackgroundStyle1}
                    imageStyle={styles.imageBackgroundStyle2}
                    source={require("../images/profile.jpg")}
                  >
                    <View style={styles.arrowDownViewStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                      >
                        <Icon
                          name="chevron-circle-down"
                          type="FontAwesome"
                          style={styles.arrowDownIconStyle}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconsViewStyle}>
                      <Right style={styles.rightTagStyle1}>
                        <Button rounded style={styles.ventaButtonStyle}>
                          <Text> Venta </Text>
                        </Button>
                      </Right>
                      <Left style={styles.leftTagStyle1}>
                        <TouchableOpacity>
                          <Icon
                            name="gavel"
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
                      <Text style={styles.priceTextStyle}>
                        $4,250,000.00 MXN
                      </Text>
                    </Right>
                    <Left style={styles.leftTagStyle1}>
                      <Button primary style={styles.contacterButtonStyle}>
                        <Text style={{ textAlign: "center" }}>Contactar </Text>
                      </Button>
                    </Left>
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

                  <View style={{ height: 40, flexDirection: "row" }}>
                    <Right style={styles.rightTagStyle1}>
                      <Text style={styles.casaModeranaTextStyle}>
                        Casa Moderna
                      </Text>
                    </Right>
                    <Left style={styles.leftTagStyle2}>
                      <Button primary style={styles.masInfoButtonStyle}>
                        <Text style={{ textAlign: "center" }}>
                          Más Información
                        </Text>
                      </Button>
                    </Left>
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

                  <View style={{ height: 10 }} />
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
                        Av. Himno Nacional #432 San Luis Potosí, SLP. México
                        78218
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: "100%", height: 500 }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title={"House 1"}
              description={"House 1 Description"}
            />
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{ latitude: 37.7886, longitude: -122.436 }}
              title={"House 2"}
              description={"House 2 Description"}
            />

            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{ latitude: 37.7899, longitude: -122.435 }}
              title={"House 3"}
              description={"House 3 Description"}
            />

            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{ latitude: 37.7895, longitude: -122.431 }}
              title={"House 4"}
              description={"House 4 Description"}
            />
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{ latitude: 37.7891, longitude: -122.428 }}
              title={"House 5"}
              description={"House 5 Description"}
            />
          </MapView>
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonsOuterViewStyle: {
    height: 80,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  menuFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  menuButtonStyle: {
    height: 50,
    width: 50,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  menu_mapIconStyle: { color: WHITE, fontSize: LARGE },
  mapButtonStyle: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  mapFlexStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buscarFlexStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttonViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buscarButtonStyle: {
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  buttonStyle: {
    width: "80%",
    height: "70%",
    backgroundColor: "#132D43",
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
  buttonTextStyle: { flex: 3, color: WHITE, fontSize: MEDIUM },
  container1: {
    flex: 1,
    backgroundColor: "transparent"
  },
  mainViewStyle: {
    height: 390,
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "white"
  },
  imageBackgroundStyle1: {
    height: 150,
    justifyContent: "flex-end"
  },
  imageBackgroundStyle2: { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  arrowDownViewStyle: {
    height: 90,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  arrowDownIconStyle: { color: WHITE, marginRight: 20, fontSize: 30 },
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
  priceTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "5%" },
  contacterButtonStyle: {
    height: 40,
    width: 140,
    backgroundColor: "#EEA823",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%"
  },
  leftTagStyle2: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  casaMainViewStyle: {
    height: 30,
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
    marginLeft: "5%"
  },
  masInfoButtonStyle: {
    height: 40,
    width: 170,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%"
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
  }
});
