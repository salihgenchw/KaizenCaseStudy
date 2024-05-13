import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import DefaultColors from "../../../constans/DefaultColors";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const { width } = Dimensions.get("window");

const UserAvatar: React.FC = () => {
  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={() => {}}>
      <FontAwesome name="user" size={width / 15} color="white" />
    </TouchableOpacity>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: DefaultColors.secondary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width / 25,
    paddingVertical: width / 30,
    borderRadius: 20,
  },
});
