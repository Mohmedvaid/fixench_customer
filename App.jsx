import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="Hello klasdfj alsdfj klasdfj klasj dfklasj fklasdjfklas jdfko;ajsdklfjaslkdfjaklsdfjaskf jaskldf jakls fjklasd fjoaiw faowjfaowfjaie fijpr af ashdf jasfkashdf jashdfj as fhapwufhw efhasdfjasdfhajsd fhajsdhf ja"
        subTitle="Hello klasdfj alsdfj klasdfj klasj dfklasj fklasdjfklas jdfko;ajsdklfjaslkdfjaklsdfjaskf jaskldf jakls fjklasd fjoaiw faowjfaowfjaie fijpr af ashdf jasfkashdf jashdfj as fhapwufhw efhasdfjasdfhajsd fhajsdhf ja"
        image={require("./app/assets/mosh.jpg")}
      />
      <ListItem
        title="Hello"
        subTitle="World"
        image={require("./app/assets/mosh.jpg")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
