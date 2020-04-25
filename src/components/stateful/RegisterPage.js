/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Tooltip,
  Icon,
  Input,
  Image,
  Text,
  Button,
  ButtonGroup,
} from "react-native-elements";
import * as helpers from "../../helpers/";
import * as en from "../../localization/en.json";
const backgroundImage = require("../../../assets/img/gradient-1.png");
const buttons = ["Depression", "Suicidal Thoughts", "Romantic Issues"];

export default class LoginPageComponent extends Component {
  state = {
    userName: "",
    email: "",
    number: "",
    categories: [],
    numberErr: "",
    receivedNumber: "",
    valid: false,
    selectedIndices: [0, 2],
  };

  updateIndex(newIndices) {
    this.setState({
      selectedIndices: [...newIndices],
    });
  }

  onRegisterUser = async () => {
    let selectedCategories = [];
    this.selectedIndices.forEach((index) => {
      selectedCategories.push(buttons[index]);
    });

    const registerInfo = {
      userName: this.state.userName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      categories: selectedCategories,
    };

    const { navigation, onRegisterListener } = this.props;

    const registerRes = await onRegisterListener(registerInfo);

    if (registerRes.registered) {
      navigation.navigate("LoginScreen");
    }
  };

  onValidatePhoneNumber = (v) => {
    const pattern = / ^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$ /;
    if (pattern.test(v)) {
      this.setState({ valid: true, number: v });
    } else {
      this.setState({
        valid: false,
        numberErr: en.registerPage.numberErr,
      });
    }
  };

  render() {
    const { selectedIndices } = this.state;
    return (
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <Grid>
          <Row size={30} style={styles.inputField}>
            <Col size={90}>
              <Input
                leftIcon={{ type: "font-awesome", name: "user", color: "#f21" }}
                label={en.registerPage.userName}
                labelStyle={styles.inputLabelStyle}
                inputStyle={styles.inputStyle}
                onChange={(v) => this.setState({ userName: v })}
              />
            </Col>
          </Row>
          <Row size={30} style={styles.inputField}>
            <Col size={90}>
              <Input
                leftIcon={{
                  type: "font-awesome",
                  name: "envelope",
                  color: "#f21",
                }}
                label={en.registerPage.email}
                labelStyle={styles.inputLabelStyle}
                inputStyle={styles.inputStyle}
                onChange={(v) => this.setState({ email: v })}
              />
            </Col>
          </Row>
          <Row size={100}>
            <Col size={100}>
              <ButtonGroup
                onPress={(v) => this.updateIndex(v)}
                selectedIndexes={selectedIndices}
                buttons={buttons}
                containerStyle={styles.buttonGroupContainerStyle}
                buttonStyle={styles.buttonGroupStyle}
                textStyle={styles.buttonGroupTextStyle}
                selectedButtonStyle={styles.buttonGroupSelectedStyle}
                selectedTextStyle={styles.buttonGroupSelectedTextStyle}
                selectMultiple
              />
            </Col>
          </Row>
          <Row size={50} style={styles.inputField}>
            <Col size={90}>
              <Input
                leftIcon={{
                  type: "font-awesome",
                  name: "mobile",
                  color: "#f21",
                }}
                label={en.registerPage.phoneNumber}
                labelStyle={styles.inputLabelStyle}
                inputStyle={styles.inputStyle}
                onChange={(v) => {
                  this.onValidatePhoneNumber(v);
                }}
              />
            </Col>
            <Col size={10}>
              <Tooltip
                height={100}
                popover={<Text>{en.registerPage.numberInfo}</Text>}
              >
                <Icon name="question-circle" type="font-awesome" color="#f80" />
              </Tooltip>
            </Col>
          </Row>
          <Row size={20}>
            <Col size={90}>
              <Button
                icon={{
                  type: "font-awesome",
                  name: "user-plus",
                  color: "white",
                }}
                buttonStyle={styles.submitButtonStyle}
                title={en.registerPage.register}
                onPress={() => this.onRegisterUser()}
              />
            </Col>
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
    padding: 20,
  },
  inputField: {
    marginTop: 20,
  },
  input: {
    color: "#fff",
    borderBottomWidth: 20,
  },
  submitButtonStyle: {
    backgroundColor: "#b5146c",
    borderRadius: 20,
  },
  label: {
    color: "#582630",
    textShadowColor: "#F1A66A",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 13,
  },
  bgImage: { flex: 1, width: "100%", height: "100%" },
  logo: {
    resizeMode: "contain",
    width: "80%",
    height: "80%",
    marginLeft: 20,
    marginTop: -10,
  },
  phoneNumberInput: {
    flex: 1,
    flexDirection: "row",
  },
  phoneNumberHighlight: {
    flex: -1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -27,
    marginLeft: "90%",
  },
  bullseye: {
    marginLeft: -25,
    fontSize: 40,
  },
  buttonGroupContainerStyle: { height: 50 },
  buttonGroupStyle: {
    backgroundColor: "#bd2a2a",
  },
  buttonGroupTextStyle: {
    color: "#ff6",
  },
  buttonGroupSelectedStyle: {
    backgroundColor: "#ff0241",
  },
  buttonGroupSelectedTextStyle: {
    color: "#fff",
  },
  inputLabelStyle: {
    color: "#f5bcdb",
  },
});
