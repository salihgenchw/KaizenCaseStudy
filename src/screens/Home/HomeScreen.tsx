import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import TagList from "../../components/TagList";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <TagList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
