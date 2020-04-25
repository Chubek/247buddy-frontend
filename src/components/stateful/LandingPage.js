/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Image, Text, Button } from "react-native-elements";
import * as en from "../../localization/en.json";

export default class LoginPageComponent extends Component {
  state = {};

  render() {
    const backgroundImage = require("../../../assets/img/gradient-2.png");
    const heroImage = require("../../../assets/img/hero.png");
    const { navigation } = this.props;
    return (
      <ImageBackground source={backgroundImage} style={style.bgImage}>
        <Grid style={styles.mainContainer}>
          <Row size={20}>
            <Col size={100} style={styles.heroImage}>
              <Image source={heroImage} />
            </Col>
          </Row>
          <Row size={40} style={styles.buttonsContainer}>
            <Row size={10}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "sign-in",
                  color: "white",
                }}
                title={en.landingPage.logIn}
                onPress={() => navigation.navigate("LoginScreen")}
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
              />
            </Row>
            <Row size={10}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "donate",
                  color: "white",
                }}
                title={en.landingPage.donate}
                onPress={() => navigation.navigate("DonateScreen")}
              />
            </Row>
          </Row>
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
  },
  bgImage: { flex: 1, width: "100%", height: "100%" },
});
