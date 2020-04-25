/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import LandingPage from "../components/stateful/LandingPage";

export default function LandingPageScreen() {
  const navigation = useNavigation();

  return <LandingPage navigation={navigation} />;
}
