import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ApiService from "../../api/ApiService";

type DetailStackParamList = {
  DetailScreen: {
    itemId: string;
  };
};

interface DetailScreenProps {
  navigation: StackNavigationProp<DetailStackParamList, "DetailScreen">;
  route: RouteProp<DetailStackParamList, "DetailScreen">;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  useEffect(() => {
    const itemId = route?.params?.itemId;
    getDetailById(itemId);
  }, [route?.params?.itemId]);

  const getDetailById = async (id: string) => {
    try {
      const response = await ApiService.get("GET_PROMOTIONS_BY_ID", id);
      console.log(response);
    } catch (error) {
      console.error("Error fetching detail", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
