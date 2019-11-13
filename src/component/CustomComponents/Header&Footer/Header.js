import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header, Title, Button, Right, Body, Icon } from "native-base";
import { BLACK, WHITE } from "../../../theme/colors";
export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: WHITE }}>
        <Body>
          <Title style={styles.headerTitleStyle}>Tipstate</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="bell-o"
              type="FontAwesome"
              style={styles.headerIcosStyle}
            />
          </Button>
          <Button transparent>
            <Icon
              name="user-circle"
              type="FontAwesome"
              style={styles.headerIcosStyle}
            />
          </Button>
          <Button transparent>
            <Icon name="menu" style={styles.headerIcosStyle} />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerTitleStyle: { fontSize: 30, color: BLACK },
  headerIcosStyle: { color: BLACK }
});
