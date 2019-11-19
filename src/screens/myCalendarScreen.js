import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Text, Segment, Button, Icon } from "native-base";
import CustomHeader from "../component/CustomComponents/Header&Footer/Header";
import CustomFooter from "../component/CustomComponents/Header&Footer/Footer";
import { BLACK } from "../theme/colors";
import { MEDIUM } from "../font/font";
import CustomDatePicker from "../component/CustomComponents/customDatePicker";
import CustomCalendar from "../component/CustomComponents/customCalendar";

export default class MyCalendarScreen extends Component {
  state = { leftButton: "#959595", rightButton: "#959595" };

  toggleLeft = () => {
    this.setState({ leftButton: "#000000", rightButton: "#959595" });
  };

  toggleRight = () => {
    this.setState({ leftButton: "#959595", rightButton: "#000000" });
  };

  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleStyle}>Mi Calendario</Text>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>
              Aqui puedes ver todas las actividades en tu agenda.
            </Text>
          </View>

          {/* buttonsView */}

          <View style={styles.buttonsOuterViewStyle}>
            <View style={styles.segmentMainViewStyle}>
              <Segment>
                <Button
                  first
                  active
                  style={styles.segmentLeftButtonStyle}
                  onPress={() => this.toggleLeft()}
                >
                  <Icon
                    name="arrow-back"
                    style={{ color: this.state.leftButton }}
                  />
                </Button>
                <Button
                  last
                  style={styles.segmentRightButtonStyle}
                  onPress={() => this.toggleRight()}
                >
                  <Icon
                    name="arrow-forward"
                    style={{ color: this.state.rightButton }}
                  />
                </Button>
              </Segment>
            </View>
            <View style={styles.hoyOuterViewStyle}>
              <View style={styles.hoyInnerViewStyle}>
                <Text style={styles.hoyTextStyle}>Hoy</Text>
              </View>
            </View>

            <View style={styles.datePickerViewStyle}>
              <CustomDatePicker />
            </View>
          </View>

          {/* calendar */}
          <View style={styles.calendarViewStyle}>
            <CustomCalendar />
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
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: MEDIUM,
    color: BLACK
  },
  buttonsOuterViewStyle: {
    height: 80,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center"
  },
  segmentMainViewStyle: {
    flex: 1.4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  segmentLeftButtonStyle: {
    height: 35,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#EAEAEA"
  },
  segmentRightButtonStyle: {
    height: 35,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#EAEAEA"
  },
  hoyOuterViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  hoyInnerViewStyle: {
    height: 34,
    width: 50,
    backgroundColor: "#EAEAEA",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  hoyTextStyle: { color: "#959595", textAlign: "center" },
  datePickerViewStyle: {
    flex: 2,
    justifyContent: "center"
  },
  calendarViewStyle: {
    height: 320,
    width: "90%",
    alignSelf: "center"
  }
});
