import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import TagList from "../../components/TagList";
import MainCard from "../../components/MainCard";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <TagList />
      <MainCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
