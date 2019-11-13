import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Button,
  Text,
  Card,
  Right,
  Left
} from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { WHITE, BLACK } from "../theme/colors";
import { LARGE, MEDIUM, SMALL } from "../font/font";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomHouseView from "../component/CustomComponents/HouseView/CustomHouseView";
import CustomDropdown from "../component/CustomComponents/customDropdown";

export default class HouseDetailScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.mainViewStyle}>
            <ImageBackground
              style={styles.imageBackgroundStyle1}
              source={require("../images/house.jpg")}
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
                      name="gavel"
                      type="FontAwesome"
                      style={{ color: WHITE }}
                    />
                  </TouchableOpacity>
                  <View style={{ width: "15%" }} />
                  <TouchableOpacity>
                    <Icon
                      name="share-alt"
                      type="FontAwesome"
                      style={{ color: WHITE }}
                    />
                  </TouchableOpacity>
                  <View style={{ width: "15%" }} />
                  <TouchableOpacity>
                    <Icon
                      name="heart"
                      type="FontAwesome"
                      style={{ color: "red" }}
                    />
                  </TouchableOpacity>
                  <View style={{ width: "5%" }} />
                </Left>
              </View>
            </ImageBackground>

            <View style={styles.contacterViewStyle}>
              <Right style={styles.rightTagStyle2}>
                <Text style={styles.priceTextStyle}>$4,250,000.00 MXN</Text>
              </Right>
              <Left style={styles.leftTagStyle1}>
                <Button primary style={styles.contacterButtonStyle}>
                  <Text style={{ textAlign: "center" }}>Contactar </Text>
                </Button>
              </Left>
            </View>

            <View style={{ height: 10 }} />
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
                <Text style={styles.casaModeranaTextStyle}>Casa Moderna</Text>
              </Right>
              <Left style={styles.leftTagStyle2}>
                {/* <Button primary style={styles.masInfoButtonStyle}>
                  <Text style={{ textAlign: "center" }}>Más Información </Text>
                </Button> */}
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

            <View style={{ height: 20 }} />
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
          </View>

          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: "100%", height: 200 }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          ></MapView>
          <View style={{ height: 10 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>
              Descripción de la propiedad
            </Text>
            <View style={{ height: 5 }} />
            <Text style={styles.descriptionTextStyle}>
              Propiedad en zona residencial segura, recomendable para familias
              pequeñas de 3 a 4 integrantes. Cuenta con dos habitaciones,
              recamara principal con baño propio (con tina), un baño completo en
              la planta superior. Medio baña en la primera planta, cocina,
              comedor y terraza. Cochera para dos autos. Piso con duela, el
              espacio se diseñó pensando en conservar la intimidad de cada
              habitación. Acabados en pasta y concreto aparente. Altura de 2.5 a
              3 mts.
            </Text>
          </View>

          {/* Características */}

          <View style={{ height: 10 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>Características</Text>
          </View>

          <View style={styles.characteristicsMainViewStyle}>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="square-o"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>450 m2 de Terreno</Text>
              </View>
            </View>

            <View style={{ width: 20 }} />

            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="minus-square-o"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>380 m2 de Construcción</Text>
              </View>
            </View>
          </View>

          <View style={styles.characteristicsMainViewStyle}>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="sort-amount-asc"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>2 Niveles</Text>
              </View>
            </View>

            <View style={{ width: 20 }} />

            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="bed"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>4 Recamaras</Text>
              </View>
            </View>
          </View>

          <View style={styles.characteristicsMainViewStyle}>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="bath"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>2 Baños y medio</Text>
              </View>
            </View>

            <View style={{ width: 20 }} />

            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="car"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>2 Estacionamientos</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>Amenidades</Text>
          </View>

          <View style={styles.characteristicsMainViewStyle}>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="bed"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>Amuebleado</Text>
              </View>
            </View>

            <View style={{ width: 20 }} />

            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </View>

              <View style={styles.textViewStyle}>
                <Text style={{ color: "black" }}>Terraza</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>Galeria</Text>
          </View>

          <View style={{ height: 20 }} />

          <View style={styles.imageMainViewStyle}>
            <View style={styles.imageOuterViewStyle}>
              <Image
                source={require("../images/room1.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>

            <View style={{ width: 15 }} />

            <View style={styles.imageOuterViewStyle}>
              <Image
                source={require("../images/room2.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>
          <View style={{ height: 15 }} />
          <View style={styles.imageMainViewStyle}>
            <View style={styles.imageOuterViewStyle}>
              <Image
                source={require("../images/room3.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>

            <View style={{ width: 15 }} />

            <View style={styles.imageOuterViewStyle}>
              <Image
                source={require("../images/room4.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View style={styles.ubicacionViewStyle}>
            <Text style={styles.ubicacionTextStyle}>Propiedades similares</Text>
          </View>

          {/* Custom List View Card */}
          <CustomHouseView />
          <CustomHouseView />
        </Content>
        <CustomFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 500,
    width: "100%",
    alignSelf: "center"
  },
  imageBackgroundStyle1: {
    height: 250,
    justifyContent: "flex-end"
  },
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
    marginLeft: "5%"
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
  },
  descriptionTextStyle: {
    fontSize: SMALL,
    marginLeft: "3%"
  },
  characteristicsMainViewStyle: {
    height: 50,
    flexDirection: "row",
    alignSelf: "center",
    width: "93%"
  },
  outerViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  iconViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  textViewStyle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  imageMainViewStyle: {
    height: 150,
    width: "94%",
    alignSelf: "center",
    flexDirection: "row"
  },
  imageOuterViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
