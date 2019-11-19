import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Container, Content, Text } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import { MEDIUM } from "../font/font";
import CustomStatisticsView from "../component/CustomComponents/statsView/CustomStatisticView";

import { LineChart } from "react-native-chart-kit";

export default class MyStatisticsScreen extends Component {
  constructor() {
    super();
    this.state = {
      sWidth: Dimensions.get("window").width
    };
    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(e) {
    this.setState({ sWidth: Dimensions.get("window").width });
  }
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mis Estadísticas</Text>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>
              Estas son tus estadísticas del último mes.
            </Text>
          </View>
          <View style={{ height: 15 }} />
          <CustomStatisticsView />
          <CustomStatisticsView />
          <CustomStatisticsView IconName="bar-chart" fontSize={40} />
          <CustomStatisticsView IconName="calendar" fontSize={40} />

          <View style={{ height: 15 }} />
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>Renta/Venta</Text>
          </View>
          <View
            style={{
              height: 250,
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "blue",
              alignSelf: "center"
            }}
          >
            <LineChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June"
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={this.state.sWidth} // from react-native
              height={220}
              yAxisLabel={"$"}
              yAxisSuffix={"k"}
              chartConfig={{
                backgroundColor: "#EAEAEA",
                backgroundGradientFrom: "#EAEAEA",
                backgroundGradientTo: "#EAEAEA",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(254, 140, 53, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(129, 129, 129, ${opacity})`,
                // style: {
                //   borderRadius: 0,
                //   width: "90%",
                //   justifyContent: "flex-start"
                // },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
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

  textViewStyle: {
    height: 30,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: MEDIUM,
    color: BLACK
  },
  viewStyle1: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBarStyle: {
    backgroundColor: "#EAEAEA",
    alignSelf: "center",
    width: "90%",
    height: 50,
    borderRadius: 30
  }
});
