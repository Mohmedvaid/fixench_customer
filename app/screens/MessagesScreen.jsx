import { StyleSheet, Text, FlatList, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Item pressed")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Message 2",
              description: "This is a message",
              image: require("../assets/welcome-bg.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
