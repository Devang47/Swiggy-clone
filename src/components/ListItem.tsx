import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressiveImage from "./ProgressiveImage";

const ListItem = ({
  item,
}: {
  item: {
    id: string;
    title: string;
    image: string;
    thumbnail: string;
  };
}) => {
  console.log(item.image);
  return (
    <View style={{ marginRight: 25 }}>
      <View style={styles.container}>
        <ProgressiveImage
          style={{ width: 150, height: 120 }}
          source={{ uri: item.image }}
          thumbnailSource={item.thumbnail}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    marginTop: 8,
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 15,
  },
});

export default ListItem;
