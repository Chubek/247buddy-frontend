/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Button } from "react-native-elements";
import * as en from "../../localization/en.json";

export default class LoginPageComponent extends Component {
  state = {};

  render() {
    const backgroundImage = require("../../../assets/img/gradient-2.png");
    const heroImage = require("../../../assets/img/hero.png");
    const { navigation } = this.props;
    return (
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <Grid style={styles.mainContainer}>
          <Row size={40}>
            <Image style={styles.heroImage} source={heroImage} />
          </Row>
          <Col size={90}>
            <Row size={10}>
              <Button
                icon={{ type: "font-awesome", name: "sign-in", color: "white" }}
                title={en.landingPage.logIn}
                onPress={() => navigation.navigate("LoginScreen")}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
              />
            </Row>
            <Row size={10}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "user-plus",
                  color: "white",
                }}
                title={en.landingPage.register}
                onPress={() => navigation.navigate("RegisterScreen")}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
              />
            </Row>
            <Row size={10}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "heart",
                  color: "white",
                }}
                title={en.landingPage.connect}
                onPress={() => navigation.navigate("ConnectScreen")}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
              />
            </Row>
            <Row size={50}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "gift",
                  color: "white",
                }}
                title={en.landingPage.donate}
                onPress={() => navigation.navigate("DonateScreen")}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
              />
            </Row>
          </Col>
        </Grid>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  bgImage: { flex: 1, width: "100%", height: "100%" },
  heroImage: {
    resizeMode: "contain",
    height: "80%",
    width: "860%",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#124",
    borderRadius: 20,
  },
});
