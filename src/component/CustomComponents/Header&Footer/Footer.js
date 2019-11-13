import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { WHITE } from "../../../theme/colors";
export default class CustomFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: WHITE }}>
          <Button vertical>
            <Icon name="home" style={styles.footerIconStyle} />
            <Text style={styles.footerTextStyle}>Inicio</Text>
          </Button>
          <Button vertical>
            <Icon
              name="heart-o"
              type="FontAwesome"
              style={styles.footerIconStyle}
            />
            <Text style={styles.footerTextStyle}>Favoritos</Text>
          </Button>
          <Button vertical>
            <Icon
              name="plus-square-o"
              type="FontAwesome"
              style={styles.footerIconStyle}
            />
            <Text style={styles.footerTextStyle}>publicar</Text>
          </Button>
          <Button vertical>
            <Icon
              name="arrows-alt"
              type="FontAwesome"
              style={styles.footerIconStyle}
            />
            <Text style={styles.footerTextStyle}>Comparar</Text>
          </Button>
          <Button vertical>
            <Icon
              name="comment-o"
              type="FontAwesome"
              style={styles.footerIconStyle}
            />
            <Text style={styles.footerTextStyle}>Mensajes</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footerTextStyle: { fontSize: 7, color: "#979797" },
  footerIconStyle: { color: "#979797" }
});
