import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Container, Content, Icon, Right, Left, Button } from "native-base";
import { BLACK, WHITE } from "../theme/colors";
import { MEDIUM, LARGE } from "../font/font";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import CustomButton from "../component/CustomComponents/Button/CustomerButton";

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mi Perfil</Text>
          </View>
          <View style={styles.imageViewStyle}>
            <View
              style={{
                width: "50%",
                alignSelf: "center"
              }}
            >
              <Image
                style={styles.imageStyle}
                source={require("../images/profile.jpg")}
              />
              <TouchableOpacity style={styles.editImageButtonStyle}>
                <Icon
                  name="pencil-square-o"
                  type="FontAwesome"
                  style={styles.editIconStle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.nameTextStyle}>Jorge Martinez</Text>
          </View>
          <View>
            <Text style={styles.emailStyle}>abc@gmail.com</Text>
          </View>
          <View style={styles.stericViewStyle}>
            <View style={styles.stericButtonStyle}>
              <Icon
                name="star"
                type="FontAwesome"
                style={styles.filledStericIconStyle}
              />
            </View>
            <View style={styles.stericButtonStyle}>
              <Icon
                name="star"
                type="FontAwesome"
                style={styles.filledStericIconStyle}
              />
            </View>
            <View style={styles.stericButtonStyle}>
              <Icon
                name="star"
                type="FontAwesome"
                style={styles.filledStericIconStyle}
              />
            </View>
            <View style={styles.stericButtonStyle}>
              <Icon
                name="star"
                type="FontAwesome"
                style={styles.filledStericIconStyle}
              />
            </View>
            <View style={styles.stericButtonStyle}>
              <Icon
                name="star-o"
                type="FontAwesome"
                style={styles.unfillStericIconStyle}
              />
            </View>
          </View>

          <View style={{ height: 20 }} />

          <View
            style={{
              height: 70,
              flexDirection: "row"
            }}
          >
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity
                style={styles.leftButtonStyle}
                onPress={() => this.props.navigation.navigate("CalanderScreen")}
              >
                <Icon
                  name="calendar"
                  type="FontAwesome"
                  style={styles.buttonIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Calendario</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity
                style={styles.leftButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("SearchLocationScreen")
                }
              >
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={styles.buttonIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Busquedas</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: 70,
              flexDirection: "row"
            }}
          >
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity
                style={styles.leftButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("EvaluationScreen")
                }
              >
                <Icon
                  name="star-o"
                  type="FontAwesome"
                  style={styles.buttonIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Evaluaciones</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity
                style={styles.leftButtonStyle}
                onPress={() =>
                  this.props.navigation.navigate("DirectoryScreen")
                }
              >
                <Icon
                  name="desktop"
                  type="FontAwesome"
                  style={styles.buttonIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Directorio</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: 40 }} />
          <View
            style={{
              height: 30,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <Text style={{ color: BLACK, fontSize: MEDIUM }}>
              Control de Immuebles
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#979797",
              width: "90%",
              alignSelf: "center"
            }}
          />

          <View style={{ height: 25 }} />
          <CustomButton
            buttonText=" Mis Propiedades"
            IconName="home"
            onPress={() =>
              this.props.navigation.navigate("PropertiesMapViewScreen")
            }
          />
          <CustomButton
            onPress={() => this.props.navigation.navigate("StatisticsScreen")}
            buttonText="Mis Estadisticas"
            IconName="bar-chart"
          />

          <View style={{ height: 20 }} />
          <View
            style={{
              height: 30,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <Text style={{ color: BLACK, fontSize: MEDIUM }}>
              Socio Tipstate
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#979797",
              width: "90%",
              alignSelf: "center"
            }}
          />

          <View style={{ height: 25 }} />
          <CustomButton
            buttonText="Mis Parametros"
            IconName="sliders"
            onPress={() => this.props.navigation.navigate("ParameterScreen")}
          />

          <CustomButton
            buttonText="Mis Agentes"
            IconName="users"
            onPress={() => this.props.navigation.navigate("AgentScreen")}
          />

          <View style={{ height: 40 }} />
          <View
            style={{
              height: 30,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <Text style={{ color: BLACK, fontSize: MEDIUM }}>
              Control de Cuenta
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#979797",
              width: "90%",
              alignSelf: "center"
            }}
          />
          <View style={{ height: 30 }} />
          <View
            style={{
              height: 150,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <View>
              <Text style={{ color: BLACK, fontSize: MEDIUM, paddingTop: 5 }}>
                Cambiar Contrasena
              </Text>
            </View>
            <View>
              <Text style={{ color: BLACK, fontSize: MEDIUM, paddingTop: 5 }}>
                Reportar un Problema
              </Text>
            </View>
            <View>
              <Text style={{ color: BLACK, fontSize: MEDIUM, paddingTop: 5 }}>
                Eliminar Cuenta
              </Text>
            </View>
            <View>
              <Text style={{ color: "red", fontSize: MEDIUM, paddingTop: 8 }}>
                Cerrar Session
              </Text>
            </View>
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
  imageViewStyle: {
    height: 130,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: "center"
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
    fontSize: 22,
    fontWeight: "bold",
    color: BLACK,
    padding: 5,
    textAlign: "center"
  },
  emailStyle: {
    fontSize: 16,
    color: BLACK,
    textAlign: "center"
  },
  stericViewStyle: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center"
  },
  stericButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  unfillStericIconStyle: {
    color: "#979797",
    alignSelf: "center"
  },
  filledStericIconStyle: { color: "#132D43", alignSelf: "center" },
  buttonViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  leftButtonStyle: {
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
  buttonTextStyle: { flex: 3, color: WHITE, fontSize: MEDIUM }
});
