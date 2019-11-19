import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch
} from "react-native";
import { Container, Content, Text, CheckBox, Body, Button } from "native-base";
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

export default class MyParametersScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          {/* titleView */}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Parámetros</Text>
          </View>

          {/* checkboxes */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Tipo de operación deseada
            </Text>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Renta</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox
                  checked={true}
                  style={[
                    styles.checkBoxStyle,
                    { backgroundColor: "orange", borderColor: "#F6F6F6" }
                  ]}
                />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Renta</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Tipo de inmueble
            </Text>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Casa</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Departmento</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Oficina</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Rancho</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Terreno</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Local/Bodega</Text>
              </View>
            </View>
          </View>

          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Nave Industrial</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle} />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Preferencias de horarios para citas
            </Text>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>mañana</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Tarde</Text>
              </View>
            </View>

            {/* <View style={styles.checkBoxViewStyle2} /> */}
          </View>
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View style={styles.checkBoxInnerViewStyle}>
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View style={styles.checkBoxTextViewStyle}>
                <Text>Noche</Text>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle} />
          </View>

          {/* halfTextInputs */}
          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
              Rango de Precios
            </Text>
          </View>
          <View>
            <View>
              <Text
                style={{ marginLeft: "5%", color: "#959595", paddingTop: 5 }}
              >
                Venta
              </Text>
            </View>
            <View style={styles.halfTextInputViewStyle}>
              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Desde" />
              </View>

              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Hasta" />
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text
                style={{ marginLeft: "5%", color: "#959595", paddingTop: 5 }}
              >
                Renta
              </Text>
            </View>
            <View style={styles.halfTextInputViewStyle}>
              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Desde" />
              </View>

              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Hasta" />
              </View>
            </View>
          </View>

          {/* switch */}
          <View style={{ height: 10 }} />
          <View>
            <View>
              <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
                Compartir comisión con otra inmobiliara
              </Text>
            </View>

            <View style={styles.switchMainViewStyle}>
              <View style={styles.switchStyle}>
                <Switch color="orange" />
              </View>
              <View style={styles.switchTextStyle}>
                {/* <Text>Mostrar Ubicación Exacta</Text> */}
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text
                style={{ marginLeft: "5%", color: "#959595", paddingTop: 5 }}
              >
                Compartir promedio cobrada sobre el valor de:
              </Text>
            </View>
            <View style={styles.halfTextInputViewStyle}>
              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Renta" />
              </View>

              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" placeholder="Venta" />
              </View>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <View>
              <Text style={{ marginLeft: "5%", fontWeight: "bold" }}>
                Aceptar Créditos
              </Text>
            </View>

            <View style={styles.mainCheckBoxViewStyle}>
              <View style={styles.checkBoxViewStyle}>
                <View style={styles.checkBoxInnerViewStyle}>
                  <CheckBox checked={true} style={styles.checkBoxStyle} />
                </View>
                <View style={styles.checkBoxTextViewStyle}>
                  <Text>Bancos</Text>
                </View>
              </View>

              <View style={styles.checkBoxViewStyle}>
                <View style={styles.checkBoxInnerViewStyle}>
                  <CheckBox checked={true} style={styles.checkBoxStyle} />
                </View>
                <View style={styles.checkBoxTextViewStyle}>
                  <Text>INFONAVIT</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainCheckBoxViewStyle}>
              <View style={styles.checkBoxViewStyle}>
                <View style={styles.checkBoxInnerViewStyle}>
                  <CheckBox checked={true} style={styles.checkBoxStyle} />
                </View>
                <View style={styles.checkBoxTextViewStyle}>
                  <Text>IMSS</Text>
                </View>
              </View>

              <View style={styles.checkBoxViewStyle}>
                <View style={styles.checkBoxInnerViewStyle}>
                  <CheckBox checked={true} style={styles.checkBoxStyle} />
                </View>
                <View style={styles.checkBoxTextViewStyle}>
                  <Text>Otros</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ height: 30 }} />
          <View style={styles.guardarButtonViewStyle}>
            <Button primary style={styles.guardarButtonStyle}>
              <Text style={styles.guardarButtonTextStyle}>Guardar</Text>
            </Button>
          </View>
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
  mainCheckBoxViewStyle: {
    height: 40,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center"
  },

  checkBoxViewStyle: {
    flex: 2.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  checkBoxViewStyle2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  checkBoxStyle: {
    backgroundColor: "#F6F6F6",
    height: 20,
    width: 20,
    borderRadius: 5,
    borderColor: "#F6F6F6",
    borderWidth: 1
  },
  checkBoxInnerViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  checkBoxTextViewStyle: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  halfTextInputViewStyle: { flexDirection: "row", height: 50 },
  halfTextInputStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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

  guardarButtonViewStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  guardarButtonStyle: {
    height: 35,
    width: 140,
    backgroundColor: "#EEA823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  guardarButtonTextStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 16
  }
});
