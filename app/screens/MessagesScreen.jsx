import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import ListItems from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "Message 1",
    description: "This is a message",
    image: require("../assets/welcome-bg.jpeg"),
  },
  {
    id: 2,
    title: "Message 2",
    description: "This is a message",
    image: require("../assets/welcome-bg.jpeg"),
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
