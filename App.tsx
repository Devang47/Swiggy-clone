import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
// import VectorImage from 'react-native-vector-image';
import Icon from "react-native-vector-icons/FontAwesome5";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#4A306D", flex: 1 }}>
      {/* <VectorImage source={require('./icon.svg')} /> */}
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magNni
        praesentium ex ab vitae tenetur in quod? Incidunt debitis nulla fugit
        aliquid, aperiam asperiores ad suscipit iusto voluptate quisquam
        corrupti?et
      </Text>
      <Icon name={"cog"} color={"black"} size={30} color="#F3F7F0" />
      <Icon name={"history"} color={"black"} size={30} color="#F3F7F0" />
      <Icon name={"award"} color={"black"} size={30} color="#F3F7F0" />
      <Icon name={"trophy"} color={"black"} size={30} color="#F3F7F0" />
      <Icon name="user" size={30} color="#F3F7F0" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
