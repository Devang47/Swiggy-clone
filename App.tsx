import React from "react";
import { SafeAreaView, Text } from "react-native";
import Header from "./src/sections/Header";
import Home from "./src/sections/Home";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <Home />
    </SafeAreaView>
  );
};

export default App;
