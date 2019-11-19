import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Button, Card } from "native-base";
import { BLACK, WHITE } from "../theme/colors";
import { MEDIUM, LARGE, SMALL } from "../font/font";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import CustomRatingLine from "../component/CustomComponents/RatingLine/CustomRatingLine";

export default class MyEvaluationScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          {/* title */}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Evaluaciones</Text>
          </View>
          {/* card */}
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
                <Text style={styles.neuronTextStyle}>Victor Galván</Text>
                <Text style={styles.smallTextStyle}>vags.dg@gmail.com</Text>
                <Text style={styles.smallTextStyle}>Usuario: 09/10/2018</Text>
                <Text style={styles.smallTextStyle}>Cierres: 10</Text>

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

                <Text style={styles.smallTextStyle}>2 Evaluaciones</Text>
              </View>
            </View>
          </Card>

          {/* centerView */}
          <View style={{ height: 30 }} />
          <View style={styles.lineStyle} />
          <View style={styles.viewStyle1}>
            <View style={{ flex: 1.2 }}>
              <View style={styles.textsViewStyle}>
                <Text style={styles.neuronTextStyle}>Alvaro Mashiro</Text>
                <View style={styles.stericViewStyle}>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
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
                <Text style={styles.smallTextStyle}>alvaro@gmail.com</Text>
                <Text style={styles.smallTextStyle}>Usuario: 05/06/2017</Text>
              </View>
            </View>

            <View style={styles.imageViewStyle}>
              <Button primary style={styles.vermásButtonStyle}>
                <Text style={{ textAlign: "center", color: WHITE }}>
                  Ver más
                </Text>
              </Button>
            </View>
          </View>
          <View style={styles.lineStyle} />

          {/* seclastView */}

          <View style={styles.viewStyle1}>
            <View style={{ flex: 1.2 }}>
              <View style={styles.textsViewStyle}>
                <Text style={styles.neuronTextStyle}>Cobito Covarrubias</Text>
                <View style={styles.stericViewStyle}>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
                    />
                  </View>
                  <View style={styles.stericButtonStyle}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={styles.filledStericIconStyle1}
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
                <Text style={styles.smallTextStyle}>cobo@gmail.com</Text>
                <Text style={styles.smallTextStyle}>Usuario: 08/08/2018</Text>
              </View>
            </View>

            <View style={styles.imageViewStyle}>
              <Button primary style={styles.vermonosButtonStyle}>
                <Text style={{ textAlign: "center", color: "#D3D3D3" }}>
                  Ver menos
                </Text>
              </Button>
            </View>
          </View>

          {/* lastRatings */}
          <CustomRatingLine text="Comentarios" />
          <CustomRatingLine text="Puntualidad" />
          <CustomRatingLine text="Amabilidad" />
          <CustomRatingLine text="Empatia" />
          <CustomRatingLine text="Actitud en General" />
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
  cardStyle: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#EAEAEA"
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
  neuronTextStyle: {
    fontSize: LARGE,
    fontWeight: "bold",
    marginLeft: "5%",
    color: "black"
  },
  telefonoTextStyle: { fontSize: MEDIUM, marginLeft: "5%" },
  smallTextStyle: { fontSize: SMALL, marginLeft: "5%", color: "#979797" },
  stericViewStyle: {
    height: 40,
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
  iconTextStyle: { color: "#979797", fontSize: LARGE, marginLeft: "3%" },
  lineStyle: {
    height: 2,
    backgroundColor: "#EAEAEA",
    width: "85%",
    alignSelf: "center"
  },
  viewStyle1: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    flexDirection: "row"
  },
  filledStericIconStyle1: { color: "#122A3F", alignSelf: "center" },
  vermásButtonStyle: {
    height: 40,
    width: 120,
    backgroundColor: "#132D43",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  vermonosButtonStyle: {
    height: 40,
    width: 120,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#D3D3D3",
    borderWidth: 1
  },

  viewStyle2: {
    width: "85%",
    height: 40,
    alignSelf: "center",
    flexDirection: "row"
  },
  ratingTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  stericsViewStyle: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  stericButtonStyle1: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1
  },
  stericViewStyle1: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "flex-end"
  }
});
