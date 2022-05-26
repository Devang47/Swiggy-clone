import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing,
  TouchableNativeFeedback,
  Pressable,
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
            Dehradun, Uttarakhand India
          </Text>
        </View>
      </View>
      <Pressable android_ripple={{}}>
        <MaterialIcon name="account-circle" color="#4f5257" size={40} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
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
  location_address: {
    width: 250,
    marginTop: 2,
    color: "#686a6e",
  },
});

export default Header;
