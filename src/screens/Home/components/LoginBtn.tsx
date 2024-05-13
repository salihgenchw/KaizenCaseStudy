import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const LoginBtn: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Giriş Yap</Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    borderRadius: width / 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width / 15,
    paddingVertical: width / 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: width / 26,
  },
});
