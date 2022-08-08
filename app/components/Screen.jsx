import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* TODO applying duplicate styles on safeareaview as well as view, this might add duplicate styles. Might need a fix */}
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
