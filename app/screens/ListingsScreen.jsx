import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red Luxury Apartment",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in the living room",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          );
        }}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
