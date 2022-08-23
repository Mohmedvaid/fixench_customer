import React, { useEffect, useState } from "react";
import { StyleSheet, Switch } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // const results = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if (!granted) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
