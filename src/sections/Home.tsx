import React, { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import ListItem from "../components/ListItem";

function Home() {
  const DATA = [
    {
      id: "0",
      title: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      thumbnail:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
    {
      id: "1",
      title: "Instamart",
      image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f",
      thumbnail:
        "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
    {
      id: "2",
      title: "Genie",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55",
      thumbnail:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
    {
      id: "3",
      title: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      thumbnail:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
    {
      id: "4",
      title: "Instamart",
      image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f",
      thumbnail:
        "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
    {
      id: "5",
      title: "Genie",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55",
      thumbnail:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&raw_url=true&q=10&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100",
    },
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={{ marginTop: 10 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{}}>
        <TextInput
          placeholder="Search for restaurant, item or more"
          style={styles.textInput}
        ></TextInput>
        <View style={styles.searchIcon}>
          <Icon name="search" size={19} />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20 }}
      >
        <FlatList
          data={DATA}
          renderItem={ListItem}
          keyExtractor={(item) => item.id}
          horizontal
          style={{}}
        ></FlatList>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 16,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
  },
  searchIcon: {
    position: "absolute",
    right: 35,
    top: "50%",
    transform: [{ translateY: -9.5 }],
  },
});

export default Home;
