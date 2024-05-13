import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import LoginBtn from "./LoginBtn";
import UserAvatar from "./UserAvatar";

const { width, height } = Dimensions.get("window");

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/Daha_Daha.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.userContainer}>
        <LoginBtn />
        <UserAvatar />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: width / 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: width / 4,
    height: height * 0.06,
    resizeMode: "contain",
  },
  logoContainer: {
    flex: 1.1,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});
