/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Tooltip,
  Icon,
  Input,
  Image,
  Text,
  Button,
} from "react-native-elements";
import * as en from "../../localization/en.json";
import * as helpers from "../../helpers";

export default class LoginPageComponent extends React.Component {
  state = {
    loginString: null,
    smsOtp: "",
    password: null,
    err: null,
  };

  async getPasswordFromSms() {
    const otp = await helpers.getOtpFromSms();
    return otp === null || otp === "" ? "" : otp;
  }

  authAndRedirect = async () => {
    const authInfo = {
      email: this.state.loginString,
      userName: this.state.loginString,
      number: this.state.loginString,
      password: this.state.password,
    };

    const { navigation, onAuthListener } = this.props;

    const resAuth = await onAuthListener(authInfo);

    if (resAuth.auth) navigation.navigate("ListenerPairUpScreen");
  };

  componentDidMount() {
    console.log(
      `NOTE to Sethuraman: Currently, the returned OTP is ${this.getPasswordFromSms()}, hence the warning. Ignore it for now.`
    );
    setTimeout(
      () => this.setState({ smsOtp: this.getPasswordFromSms() }),
      1500
    );
  }

  render() {
    const image = require("../../../assets/img/gradient-4.png");
    return (
      <ImageBackground source={image} style={styles.bgImage}>
        <Grid style={styles.mainContainer}>
          <Row size={30}>
            <Col size={100}>
              <Input
                leftIcon={{
                  type: "font-awesome",
                  color: "#fff",
                  name: "user",
                }}
                label={en.listenerLoginPage.loginString}
              />
            </Col>
          </Row>
          <Row size={30}>
            <Col size={90}>
              <Input
                leftIcon={{
                  type: "font-awesome",
                  color: "#fff",
                  name: "key",
                }}
                label={en.listenerLoginPage.password}
              />
            </Col>
            <Col size={10}>
              <Icon
                type="font-awesome"
                name="bullseye"
                color="#f44"
                onPress={() => this.getPasswordFromSms()}
              />
            </Col>
          </Row>
          <Row size={40}>
            <Button
              icon={{
                type: "font-awesome",
                name: "sign-in",
                color: "white",
              }}
              title={en.landingPage.logIn}
              onPress={() => this.onRegisterUser()}
            />
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
  form: {
    marginTop: 100,
  },
  itemContainer: {
    margin: 20,
  },
  icon: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#ff8",
  },
  submitButton: {
    marginTop: 10,
  },
  bgImage: { flex: 1, width: "100%", height: "100%" },
});
