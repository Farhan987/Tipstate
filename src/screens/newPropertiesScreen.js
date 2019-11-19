import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch
} from "react-native";
import {
  Container,
  Content,
  Text,
  CheckBox,
  Body,
  Right,
  Left,
  Button,
  Icon
} from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ImagePicker from "react-native-image-crop-picker";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK, WHITE } from "../theme/colors";
import CustomTextInput from "../component/CustomComponents/TextInput/CuustomTextInput";
import CustomTextarea from "../component/CustomComponents/customTextarea";
import CustomDropdown from "../component/CustomComponents/customDropdown";
import { SMALL, LARGE, MEDIUM } from "../font/font";
import CountryPicker, {
  getAllCountries
} from "react-native-country-picker-modal";
import SecondCustomDropdown from "../component/CustomComponents/secondCustomDropdown";

const NORTH_AMERICA = ["NG", "GH", "SL", "GM", "LR"];

export default class NewPropertyScreen extends Component {
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
      code: "",
      image: null,
      images: null
    };
  }

  SelectImage = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 100,
      cropping: true
    }).then(image => {
      console.log(image);
      let imgSource = {
        uri: image.path,
        type: image.mime,
        name: image.path.replace(/^.*[\\\/]/, "")
      };

      this.setState({ image: imgSource });
    });
  };

  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          {/* titleView */}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Nueva Propiedad</Text>
          </View>

          {/* inputs */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Título de Propiedad</Text>
            <CustomTextInput />
          </View>

          {/* textArea */}

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>
              Descripción de la Propiedad{" "}
            </Text>
            <CustomTextarea
              rowSpan={8}
              title="Cuéntanos  acera de la propiedad que deseas publicar"
            />
          </View>

          {/* dropdown */}
          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Tipo de Transacción</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Tipo de Propiedad</Text>
            </View>
          </View>
          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <SecondCustomDropdown width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <SecondCustomDropdown width="85%" />
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Precio</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Unidades Disponibles</Text>
            </View>
          </View>

          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <SecondCustomDropdown width="85%" />
            </View>
          </View>

          {/* checkboxes */}
          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Particular</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox
                checked={true}
                style={[styles.checkBoxStyle, { backgroundColor: "orange" }]}
              />
              <Body>
                <Text>Inmobiliaria</Text>
              </Body>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Ubicación
            </Text>
          </View>

          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Pais</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Estado</Text>
            </View>
          </View>

          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Ciudad</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Código Postal</Text>
            </View>
          </View>

          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>
          </View>

          {/* inputs */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Colonia</Text>
            <CustomTextInput />
          </View>

          {/* inputs */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Calle</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Número Exterior</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Número Interior</Text>
            </View>
          </View>

          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>
          </View>

          {/* switch */}
          <View style={styles.switchMainViewStyle}>
            <View style={styles.switchStyle}>
              <Switch color="orange" />
            </View>
            <View style={styles.switchTextStyle}>
              <Text>Mostrar Ubicación Exacta</Text>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontSize: SMALL }}>
              Mover el mapa para ubicar la propiedad
            </Text>
          </View>

          <View style={{ height: 10 }} />
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

          <View style={{ height: 20 }} />
          <View>
            <Text style={styles.characteristicsTextStyle}>Caracteristicas</Text>
          </View>

          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Terreno (m2)</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Construcción (m2)</Text>
            </View>
          </View>

          <View style={styles.halfTextInputViewStyle}>
            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>

            <View style={styles.halfTextInputStyle}>
              <CustomTextInput width="85%" />
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Niveles</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Recámaras</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <View style={styles.counterOuterViewStyle}>
              <View style={styles.minusInnerViewStyle}>
                <View style={styles.minusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.plusInnerViewStyle}>
                <View style={styles.plusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ width: "10%" }}></View>

            <View style={styles.counterOuterViewStyle}>
              <View style={styles.minusInnerViewStyle}>
                <View style={styles.minusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.plusInnerViewStyle}>
                <View style={styles.plusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Baños</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Estacionamientos</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 50,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <View style={styles.counterOuterViewStyle}>
              <View style={styles.minusInnerViewStyle}>
                <View style={styles.minusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.plusInnerViewStyle}>
                <View style={styles.plusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ width: "10%" }} />

            <View style={styles.counterOuterViewStyle}>
              <View style={styles.minusInnerViewStyle}>
                <View style={styles.minusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.plusInnerViewStyle}>
                <View style={styles.plusInnerViewStyle}>
                  <TouchableOpacity style={styles.counterTouchableOpacityStyle}>
                    <Text style={styles.counterTextStyle}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* switchessss */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={styles.characteristicsTextStyle}>Amenidades</Text>
          </View>

          <View style={styles.bottomSwitchViewStyle}>
            <View style={styles.singleSwitchViewStyle}>
              <View style={styles.switchMainViewStyle}>
                <View style={styles.switchStyle2}>
                  <Switch color="orange" />
                </View>
                <View style={styles.switchTextStyle}>
                  <Text>Amueblado</Text>
                </View>
              </View>
            </View>

            <View style={styles.singleSwitchViewStyle}>
              <View style={styles.switchMainViewStyle}>
                <View style={styles.switchStyle2}>
                  <Switch color="orange" />
                </View>
                <View style={styles.switchTextStyle}>
                  <Text>Terraza</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottomSwitchViewStyle}>
            <View style={styles.singleSwitchViewStyle}>
              <View style={styles.switchMainViewStyle}>
                <View style={styles.switchStyle2}>
                  <Switch color="orange" />
                </View>
                <View style={styles.switchTextStyle}>
                  <Text>Alberca</Text>
                </View>
              </View>
            </View>

            <View style={styles.singleSwitchViewStyle}>
              <View style={styles.switchMainViewStyle}>
                <View style={styles.switchStyle2}>
                  <Switch color="orange" />
                </View>
                <View style={styles.switchTextStyle}>
                  <Text>Internet</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.contacterViewStyle}>
            <Right style={styles.rightTagStyle2}>
              <Text style={styles.priceTextStyle}>Galeria</Text>
            </Right>
            <Left style={styles.leftTagStyle1}>
              <Button primary style={styles.contacterButtonStyle}>
                <Text style={{ textAlign: "center" }}>Guia de fotos </Text>
              </Button>
            </Left>
          </View>

          <View style={styles.imageViewStyle}>
            <View
              style={{
                width: "97%",
                alignSelf: "center"
              }}
            >
              <Image style={styles.imageStyle} source={this.state.image} />
            </View>
            <TouchableOpacity onPress={() => this.SelectImage()}>
              <Text style={styles.nameTextStyle}>
                Select files here to upload
              </Text>
            </TouchableOpacity>
          </View>

          {/* checkboxes */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Datos de Popietario o Administrador Principal
            </Text>
          </View>
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Nombre</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2}>
              <CheckBox
                checked={true}
                style={[styles.checkBoxStyle, { backgroundColor: "orange" }]}
              />
              <Body>
                <Text>Usar datos de contacto</Text>
              </Body>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Correo Electrónico</Text>
            <CustomTextInput />
          </View>

          {/* countryPicker */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Celular</Text>
          </View>
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

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Datos de contacto o responsable
            </Text>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Nombre</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Correo Electrónico</Text>
            <CustomTextInput />
          </View>
          {/* countryPicker */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Celular</Text>
          </View>
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

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontSize: SMALL }}>
              * Para poder seguir con la publicación debes elegir al menos un
              medio de contacto.
            </Text>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontSize: SMALL }}>
              * Tipstate se contactará con el propietario o responsable cada 15
              días por correo electronico y cada 30 dias por mensaje de texto
              para comprobar que tu inmueble sigue estando disponible.
            </Text>
          </View>
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontSize: SMALL }}>
              * Si no confirmas la disponibilidad de tu inmueble en 61 dias por
              ninguno de los medios, este será dado de baja temporalmente hasta
              que recibamos tu confirmación de disponibilidad
            </Text>
          </View>
          <View style={{ height: 20 }} />
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
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

  mainViewStyle: {
    height: 80,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center"
  },
  mainCheckBoxViewStyle: {
    height: 40,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center"
  },
  halfTextInputViewStyle: { flexDirection: "row", height: 50 },
  halfTextInputStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfWayTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    height: 30
  },
  counterOuterViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  minusInnerViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  plusInnerViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  counterTextStyle: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 5,
    color: WHITE
  },
  counterTextInputViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  counterTouchableOpacityStyle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "center"
  },

  checkBoxViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  checkBoxStyle: {
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    borderColor: "#F6F6F6",
    borderWidth: 1
  },
  characteristicsTextStyle: { marginLeft: "5%", fontWeight: "bold" },
  switchMainViewStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  switchStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  switchTextStyle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  switchStyle2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  bottomSwitchViewStyle: {
    height: 30,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  singleSwitchViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contacterViewStyle: {
    height: 50,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center"
  },
  rightTagStyle2: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  priceTextStyle: { fontSize: 18, fontWeight: "bold", marginLeft: "5%" },
  contacterButtonStyle: {
    height: 30,
    width: 140,
    backgroundColor: "#EEA823",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%"
  },
  leftTagStyle1: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  imageViewStyle: {
    height: 190,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#F6F6F6"
  },
  imageStyle: {
    height: 150,
    width: "100%",
    alignSelf: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  editImageButtonStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#979797",
    alignSelf: "center",
    marginLeft: 80,
    marginTop: -50,
    justifyContent: "center"
  },
  editIconStle: {
    color: WHITE,
    alignSelf: "center",
    marginTop: 3,
    marginLeft: 5
  },
  nameTextStyle: {
    fontSize: MEDIUM,
    color: BLACK,
    padding: 3,
    textAlign: "center"
  },
  checkBoxViewStyle2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  phoneMainViewStyle: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
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
