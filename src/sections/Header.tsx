import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing,
  TouchableNativeFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

function Header() {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.location_container}>
          <Icon name="location-arrow" size={20} color="#f05600" />
          <TouchableNativeFeedback>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.location_mark}>69</Text>
              <MaterialIcon
                name="keyboard-arrow-down"
                color="#4f5257"
                size={30}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.location_address}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            temporibus reiciendis magni? Est rem, et quia quis voluptas culpa
            nihil assumenda optio fugiat, vitae reprehenderit at veniam!
            Obcaecati, sapiente cupiditate?
          </Text>
        </View>
      </View>
      <MaterialIcon name="account-circle" color="#4f5257" size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  location_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  location_mark: {
    fontWeight: "800",
    marginLeft: 10,
    fontSize: 22,
    color: "#414449",
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#dddddd",
    borderWidth: 1,
    padding: 10,
    flexDirection: "column",
    maxHeight: 200,
    overflow: "scroll",
  },

  dropdown_item: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  dropdown_item_wrapper: {
    backgroundColor: "#f2f2f2",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 7,
    alignItems: "center",
    paddingVertical: 8,
  },

  location_address: {
    width: 250,
    marginTop: 2,
    color: "#686a6e",
  },
});

export default Header;
