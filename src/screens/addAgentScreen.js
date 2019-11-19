import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { Container, Content, Text, CheckBox, Body } from "native-base";
import ImagePicker from "react-native-image-crop-picker";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import CustomTextInput from "../component/CustomComponents/TextInput/CuustomTextInput";
import CustomTextarea from "../component/CustomComponents/customTextarea";
import CountryPicker, {
  getAllCountries
} from "react-native-country-picker-modal";

const NORTH_AMERICA = ["NG", "GH", "SL", "GM", "LR"];

export default class AddAgentScreen extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     image: null,
  //     images: null
  //   };
  // }

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
            <Text style={styles.titleStyle}>Mi Perfil</Text>
          </View>

          {/* imagePicker */}
          <View style={styles.mainViewStyle}>
            <View style={styles.imageTextStyle}>
              <Text>Imagen</Text>
            </View>

            <View style={styles.selectImageButtonViewStyle}>
              <TouchableOpacity
                onPress={() => this.SelectImage()}
                style={styles.selectImageButtonStyle}
              >
                <Text style={{ textAlign: "center" }}>Seleccionar archivo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageViewStyle}>
              <Image style={styles.imageStyle} source={this.state.image} />
            </View>
          </View>

          {/* inputs */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Nombres</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Apellidos</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>E-mail</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Contraseña</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Confirmar contraseña</Text>
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

          {/* checkboxes */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Roles de página</Text>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Editor</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={false} style={styles.checkBoxStyle} />
              <Body>
                <Text>Analísta</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle} />
          </View>

          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Administrador</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}></View>
          </View>

          {/* textArea */}

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Notas</Text>
            <CustomTextarea rowSpan={5} />
          </View>
          <View style={{ height: 10 }} />
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
  imageTextStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  },
  selectImageButtonViewStyle: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  selectImageButtonStyle: {
    height: 40,
    width: "95%",
    backgroundColor: "#F6F6F6",
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center"
  },

  imageViewStyle: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 100
  },
  mainCheckBoxViewStyle: {
    height: 40,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center"
  },

  checkBoxViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  checkBoxStyle: {
    backgroundColor: "#F6F6F6",
    height: 21,
    width: 21,
    borderRadius: 5,
    borderColor: "#979797",
    borderWidth: 1
  },

  phoneMainViewStyle: {
    flexDirection: "row",
    width: "90%",
    height: "6%",
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
