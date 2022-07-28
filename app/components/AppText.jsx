import { Platform, StyleSheet, Text } from "react-native";
import React from "react";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  },
  ...Platform.select({
    ios: {
      fontSize: 20,
      fontFamily: "Avenir"
    },
    android: {
      fontSize: 18,
      fontFamily: "Roboto"
    }
  })
});
