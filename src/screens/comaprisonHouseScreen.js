import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Button, Card } from "native-base";
import { BLACK, WHITE } from "../theme/colors";
import { MEDIUM, LARGE, SMALL } from "../font/font";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import CustomNameAndIconView from "../component/CustomComponents/AccessoryNameScaleAndIcon/CustomNameAndIconView";
import CustomScalingView from "../component/CustomComponents/AccessoryNameScaleAndIcon/CustomScalingView";

export default class HouseCamparisonScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          {/* title */}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Comparaciones</Text>
          </View>
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>
              Añade propiedades para comparar sus características, seleccionalas
              en la lista del Dashboard.
            </Text>
          </View>

          {/* comparison */}
          <View style={{ height: 10 }} />
          <View style={styles.comparsionOuterViewStyle}>
            {/* leftSide */}
            <View style={styles.comparisonViewStyle}>
              <View style={styles.casaPegregalViewStyle}>
                <Text style={styles.casaPegregalTextStyle}>Casa Pedregal</Text>
              </View>

              <View style={styles.skuTextViewStyle}>
                <Text style={styles.skuTextStyle}>SKU: 7779451200</Text>
              </View>

              <View style={styles.imageViewStyle}>
                <Image
                  style={styles.imageStyle}
                  source={require("../images/house.jpg")}
                />
              </View>

              <View style={styles.ventaCasaOuterViewStyle}>
                <View style={styles.ventaButtonViewStyle}>
                  <Button rounded style={styles.ventaButtonStyle}>
                    <Text style={{ color: WHITE }}> Venta </Text>
                  </Button>
                </View>
                <View style={styles.casaOuterViewStyle}>
                  <View style={styles.casaIconViewStyle}>
                    <Icon name="home" style={styles.casaIconStyle} />
                  </View>
                  <View style={styles.casaTextViewStyle}>
                    <Text style={{ color: "#979797" }}>Casa</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                </View>
              </View>

              <View style={styles.priceTextViewStyle}>
                <Text style={styles.priceTextStyle}>$4,250,000.00 MXN</Text>
              </View>

              <View style={styles.contacterButtonViewStyle}>
                <Button primary style={styles.contacterButtonStyle}>
                  <Text style={styles.contacterButtonTextStyle}>Contactar</Text>
                </Button>
              </View>
            </View>
            {/* rightSide */}
            <View style={styles.comparisonViewStyle}>
              <View style={styles.casaPegregalViewStyle}>
                <Text style={styles.casaPegregalTextStyle}>Casa Pedregal</Text>
              </View>

              <View style={styles.skuTextViewStyle}>
                <Text style={styles.skuTextStyle}>SKU: 7779451200</Text>
              </View>

              <View style={styles.imageViewStyle}>
                <Image
                  style={styles.imageStyle}
                  source={require("../images/house.jpg")}
                />
              </View>

              <View style={styles.ventaCasaOuterViewStyle}>
                <View style={styles.ventaButtonViewStyle}>
                  <Button rounded style={styles.ventaButtonStyle}>
                    <Text style={{ color: WHITE }}> Venta </Text>
                  </Button>
                </View>
                <View style={styles.casaOuterViewStyle}>
                  <View style={styles.casaIconViewStyle}>
                    <Icon name="home" style={styles.casaIconStyle} />
                  </View>
                  <View style={styles.casaTextViewStyle}>
                    <Text style={{ color: "#979797" }}>Casa</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                </View>
              </View>

              <View style={styles.priceTextViewStyle}>
                <Text style={styles.priceTextStyle}>$4,250,000.00 MXN</Text>
              </View>

              <View style={styles.contacterButtonViewStyle}>
                <Button primary style={styles.contacterButtonStyle}>
                  <Text style={styles.contacterButtonTextStyle}>Contactar</Text>
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.characteristicsTextViewStyle}>
            <Text style={styles.characteristicstextStyle}>Características</Text>
          </View>
          {/* accessoriesDetail1 */}
          <CustomNameAndIconView
            backgroundColor="#F6F6F6"
            rightSideText="Terreno"
            leftSideText="Terreno"
            rightIconName="lastfm-square"
            leftIconName="lastfm-square"
          />
          <CustomScalingView
            backgroundColor="#F6F6F6"
            rightSideText="480m2"
            leftSideText="450 m2"
          />

          <CustomNameAndIconView
            rightSideText="Construido"
            leftSideText="Construido"
            rightIconName="square-o"
            leftIconName="square-o"
          />
          <CustomScalingView rightSideText="400 m2" leftSideText="380 m2" />

          {/* accessoriesDetail3 */}
          <CustomNameAndIconView
            backgroundColor="#F6F6F6"
            rightSideText="Niveles"
            leftSideText="Niveles"
            rightIconName="level-up"
            leftIconName="level-up"
          />
          <CustomScalingView
            backgroundColor="#F6F6F6"
            rightSideText="3"
            leftSideText="3"
          />

          {/* accessoriesDetail4*/}
          <CustomNameAndIconView
            rightSideText="Baños"
            leftSideText="Baños"
            rightIconName="bath"
            leftIconName="bath"
          />
          <CustomScalingView rightSideText="3" leftSideText="3.5" />

          {/* accessoriesDetail5 */}
          <CustomNameAndIconView
            backgroundColor="#F6F6F6"
            rightSideText="Habitaciones"
            leftSideText="Habitaciones"
            rightIconName="bed"
            leftIconName="bed"
          />
          <CustomScalingView
            backgroundColor="#F6F6F6"
            rightSideText="4"
            leftSideText="3"
          />

          {/* accessoriesDetail4*/}
          <CustomNameAndIconView
            rightSideText="Estacionamientos"
            leftSideText="Estacionamientos"
            rightIconName="car"
            leftIconName="car"
          />
          <CustomScalingView rightSideText="2" leftSideText="2" />

          <View style={styles.characteristicsTextViewStyle}>
            <Text style={styles.characteristicstextStyle}>Amenidades</Text>
          </View>
          <CustomNameAndIconView
            backgroundColor="#F6F6F6"
            rightSideText="No Amuebleado"
            leftSideText="Amuebleado"
            rightIconName="subway"
            leftIconName="subway"
          />

          <CustomNameAndIconView
            rightSideText="Terraza"
            leftSideText="Sin Terraza"
            rightIconName="road"
            leftIconName="road"
          />

          <View style={styles.lineViewStyle} />

          <View style={styles.buttonsMainViewStyle}>
            <View style={styles.buttonsOuterViewStyle}>
              <Button
                style={[styles.buttonStyle, { backgroundColor: "#FF7438" }]}
              >
                <Text style={styles.buttonTextStyle}>Limpiar</Text>
              </Button>
            </View>

            <View style={styles.buttonsOuterViewStyle}>
              <Button
                style={[styles.buttonStyle, { backgroundColor: "#0CAA12" }]}
              >
                <Text style={styles.buttonTextStyle}>Guardar</Text>
              </Button>
            </View>
          </View>

          <View style={styles.lineViewStyle} />

          <View style={styles.characteristicsTextViewStyle}>
            <Text style={styles.characteristicstextStyle}>
              Tus comparativas guardadas
            </Text>
          </View>
          <View style={styles.textViewStyle1}>
            <Text style={styles.textStyle}>
              Estas son tus comparativas guardadas
            </Text>
          </View>

          <View style={styles.lastOuterViewStyle}>
            <View style={styles.lastTextViewStyle}>
              <Text style={{ fontWeight: "bold", color: BLACK, fontSize: 18 }}>
                Casas Lomas
              </Text>
            </View>
            <View style={styles.lastDateViewStyle}>
              <Text>2019-10-21 - 18:31</Text>
            </View>
            <View style={styles.deleteIconViewStyle}>
              <TouchableOpacity>
                <Icon
                  name="trash-o"
                  type="FontAwesome"
                  style={{ color: "orange" }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: 10 }} />
        </Content>
        <CustomFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleViewStyle: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: BLACK
  },
  textViewStyle: {
    height: 80,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: { fontSize: MEDIUM, color: "#959595" },
  comparsionOuterViewStyle: {
    height: 410,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  comparisonViewStyle: {
    flex: 1
  },
  casaPegregalViewStyle: {
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  casaPegregalTextStyle: { fontWeight: "bold", color: BLACK, fontSize: LARGE },

  skuTextViewStyle: {
    height: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  skuTextStyle: { color: "#979797", fontSize: MEDIUM },
  imageViewStyle: {
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: { width: "90%", height: "90%", borderRadius: 10 },
  ventaCasaOuterViewStyle: {
    height: 70,
    flexDirection: "row"
  },
  ventaButtonViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ventaButtonStyle: {
    height: 35,
    backgroundColor: "#0CAA12",
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  casaOuterViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  casaIconViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  casaIconStyle: {
    color: "orange"
  },
  casaTextViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  priceTextViewStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  priceTextStyle: { fontWeight: "bold", color: BLACK, fontSize: LARGE },
  contacterButtonViewStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  contacterButtonStyle: {
    height: 40,
    width: 140,
    backgroundColor: "#EEA823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  contacterButtonTextStyle: {
    textAlign: "center",
    color: WHITE,
    fontSize: MEDIUM
  },

  characteristicsTextViewStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  characteristicstextStyle: {
    fontSize: LARGE,
    color: BLACK,
    fontWeight: "bold"
  },
  accessoriesOuterViewStyle: {
    height: 35,
    width: "90%",
    backgroundColor: "red",
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
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  accessoriesScalingViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  accessoriesScalingTextViewStyle: { fontWeight: "bold", fontSize: 18 },
  textViewStyle1: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  buttonStyle: {
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  buttonTextStyle: {
    textAlign: "center",
    color: WHITE,
    fontSize: MEDIUM
  },
  buttonsOuterViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lineViewStyle: {
    height: 2,
    width: "85%",
    backgroundColor: "#979797",
    alignSelf: "center"
  },
  buttonsMainViewStyle: {
    height: 80,
    width: "85%",
    alignSelf: "center",
    flexDirection: "row"
  },
  lastOuterViewStyle: {
    height: 50,
    backgroundColor: "#F6F6F6",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "#DFDFDF",
    borderWidth: 1,
    flexDirection: "row"
  },
  lastTextViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lastDateViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  deleteIconViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
