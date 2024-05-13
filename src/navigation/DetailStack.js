import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailScreen from "../screens/Details/DetailSreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default DetailStack;

const styles = StyleSheet.create({});
