import React from "react";
import { SafeAreaView, Text } from "react-native";
import Header from "./src/sections/Header";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />

      <Text
        style={{
          // fontFamily: "Lato",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis qui
        sunt saepe in ratione! Vel non cumque cum et ullam, reprehenderit
        doloremque assumenda quis natus vitae inventore quasi corporis
        similique?
      </Text>
    </SafeAreaView>
  );
};

export default App;
