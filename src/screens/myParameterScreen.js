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

export default class MyParametersScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
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
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Renta</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox
                checked={true}
                style={[
                  styles.checkBoxStyle,
                  { backgroundColor: "orange", borderColor: "#F6F6F6" }
                ]}
              />
              <Body>
                <Text>Venta</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2} />
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
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Casa</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <View style={{ width: 20 }}></View>
              <Body>
                <Text>Departmento</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2} />
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Oficina</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Rancho</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2} />
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Terreno</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <View style={{ width: 15 }}></View>
              <Body>
                <Text>Local/Bodega</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2} />
          </View>

          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>Nave Industrial</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}></View>
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
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <Body>
                <Text>mañana</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={true} style={styles.checkBoxStyle} />
              <View style={{ width: 15 }}></View>
              <Body>
                <Text>Tarde</Text>
              </Body>
            </View>

            <View style={styles.checkBoxViewStyle2} />
          </View>

          <View style={styles.mainCheckBoxViewStyle}>
            <View style={styles.checkBoxViewStyle}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                <CheckBox checked={true} style={styles.checkBoxStyle} />
              </View>
              <View
                style={{
                  flex: 2,
                  backgroundColor: "yellow"
                }}
              >
                <Body
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ alignSelf: "flex-start" }}>Noche</Text>
                </Body>
              </View>
            </View>

            <View style={styles.checkBoxViewStyle}></View>
          </View>
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
  }
});
