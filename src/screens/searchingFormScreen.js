import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import CustomDropdown from "../component/CustomComponents/customDropdown";
import CustomTextInput from "../component/CustomComponents/TextInput/CuustomTextInput";
import SecondCustomDropdown from "../component/CustomComponents/secondCustomDropdown";

export default class SearchingFormScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          {/* titleView */}
          <View style={styles.mainViewStyle}>
            <TouchableOpacity style={styles.backButtonStyle}>
              <Icon
                name="arrow-left"
                type="FontAwesome"
                style={styles.filledStericIconStyle}
              />
            </TouchableOpacity>

            <View style={styles.titleViewStyle}>
              <Text style={styles.titleStyle}>Busqueda</Text>
            </View>
          </View>

          {/* input */}
          <View>
            <Text style={{ marginLeft: "5%" }}>Ubicación</Text>
            <CustomTextInput />
          </View>

          <View style={{ height: 10 }} />
          {/* dropdown */}
          <View>
            <Text style={{ marginLeft: "5%" }}>Tipo de inmueble</Text>
            <SecondCustomDropdown />
          </View>

          <View style={{ height: 10 }} />
          {/* dropdown */}
          <View>
            <Text style={{ marginLeft: "5%" }}>Tipo de transacción</Text>
            <SecondCustomDropdown />
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Rango de precio</Text>
            <View style={styles.halfTextInputViewStyle}>
              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" />
              </View>

              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" />
              </View>
            </View>
          </View>

          <View style={{ height: 10 }} />
          <View>
            <Text style={{ marginLeft: "5%" }}>Superficie de terreno</Text>
            <View style={styles.halfTextInputViewStyle}>
              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" />
              </View>

              <View style={styles.halfTextInputStyle}>
                <CustomTextInput width="85%" />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Desde m2</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Hasta m2</Text>
            </View>
          </View>

          <View style={{ height: 20 }} />
          {/* dropdown */}
          <View>
            <Text style={{ marginLeft: "5%" }}>Anunciante</Text>
            <SecondCustomDropdown />
          </View>

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

          <View style={{ height: 20 }} />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Niveles</Text>
            </View>

            <View style={styles.halfWayTextViewStyle}>
              <Text style={{ marginLeft: "10%" }}>Recámaras</Text>
            </View>
          </View>
          {/* counter */}
          <View style={{ flexDirection: "row", height: 50 }}>
            <View style={styles.counterOuterViewStyle}>
              <View style={styles.counterInnerViewStyle}>
                <View style={styles.counterInnerViewStyle}>
                  <TouchableOpacity>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.counterInnerViewStyle}>
                <View style={styles.counterInnerViewStyle}>
                  <TouchableOpacity>
                    <Text style={styles.counterTextStyle2}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.counterOuterViewStyle}>
              <View style={styles.counterInnerViewStyle}>
                <View style={styles.counterInnerViewStyle}>
                  <TouchableOpacity>
                    <Text style={styles.counterTextStyle}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.counterTextInputViewStyle}>
                <CustomTextInput width="85%" />
              </View>
              <View style={styles.counterInnerViewStyle}>
                <View style={styles.counterInnerViewStyle}>
                  <TouchableOpacity>
                    <Text style={styles.counterTextStyle2}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Content>
        {/* <CustomFooter navigation={this.props.navigation} /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 60,
    flexDirection: "row"
  },
  backButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  titleViewStyle: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: BLACK
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
    alignItems: "flex-start"
  },
  characteristicsTextStyle: { marginLeft: "5%", fontWeight: "bold" },
  counterOuterViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  counterInnerViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counterTextStyle: { fontSize: 40, width: 20 },
  counterTextInputViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  counterTextStyle2: { fontSize: 22, width: 20 }
});
