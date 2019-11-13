import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Right,
  Left,
  Button,
  Card
} from "native-base";
import { BLACK, WHITE } from "../theme/colors";
import { MEDIUM, LARGE, SMALL } from "../font/font";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import CustomButton from "../component/CustomComponents/Button/CustomerButton";

export default class MyAgentsScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Agentes</Text>
          </View>

          <View style={{ height: 15 }} />
          <Card style={styles.cardStyle}>
            <View style={styles.imageViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require("../images/profile.jpg")}
              />
            </View>
            <View style={{ flex: 1.2 }}>
              <View style={styles.textsViewStyle}>
                <Text style={styles.neuronTextStyle}>Justino Tello</Text>
                <Text style={styles.smallTextStyle}>justino@gmail.com</Text>
                <Text style={styles.smallTextStyle}>Cierres: 10</Text>

                <View style={styles.stericViewStyle}>
                  <TouchableOpacity style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.stericButtonStyle}>
                    <Icon
                      name="star-o"
                      type="FontAwesome"
                      style={styles.unfillStericIconStyle}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.smallTextStyle}>2 Evaluaciones</Text>
              </View>
            </View>
          </Card>

          <View style={{ height: 10 }} />
          <Card style={styles.cardStyle}>
            <View style={styles.iconViewStyle}>
              <TouchableOpacity>
                <Icon
                  name="plus-square-o"
                  type="FontAwesome"
                  style={styles.addIconStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.iconTextViewStyle}>
              <Text style={styles.iconTextStyle}>Agregar Agente</Text>
            </View>
          </Card>
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
  cardStyle: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#EAEAEA"
  },
  imageViewStyle: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageStyle: {
    width: 130,
    height: 130,
    borderRadius: 100
  },
  textsViewStyle: {
    height: 170,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  neuronTextStyle: { fontSize: LARGE, fontWeight: "bold", marginLeft: "5%" },
  telefonoTextStyle: { fontSize: MEDIUM, marginLeft: "5%" },
  smallTextStyle: { fontSize: SMALL, marginLeft: "5%", color: "#979797" },
  stericViewStyle: {
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "flex-start"
  },
  stericButtonStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  },
  unfillStericIconStyle: {
    color: "#979797",
    alignSelf: "center"
  },
  filledStericIconStyle: { color: "orange", alignSelf: "center" },
  buttonViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  iconTextViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  addIconStyle: { color: "#979797", fontSize: 40, marginRight: "10%" },
  iconTextStyle: { color: "#979797", fontSize: LARGE, marginLeft: "3%" }
});
