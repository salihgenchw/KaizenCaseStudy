import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import ApiService from "../../api/ApiService";
import { Ionicons } from "@expo/vector-icons";

type DetailStackParamList = {
  DetailScreen: {
    itemId: string;
  };
};

interface DetailScreenProps {
  route: RouteProp<DetailStackParamList, "DetailScreen">;
}

const { width, height } = Dimensions.get("window");

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const [detailItem, setDetailItem] = useState<any>(null);

  useEffect(() => {
    const itemId = route?.params?.itemId;
    getDetailById(itemId);
  }, [route?.params?.itemId]);

  const getDetailById = async (id: string) => {
    try {
      const response = await ApiService.get("GET_PROMOTIONS_BY_ID", id);
      setDetailItem(response);
    } catch (error) {
      console.error("Error fetching detail", error);
    }
  };

  const extractTextFromHtml = (html: string) => {
    const strippedString = html.replace(/<[^>]+>/g, "");
    return strippedString.replace(/&uuml;/g, "Ü");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={34} color="white" />
      </TouchableOpacity>
      <Image source={{ uri: detailItem?.ImageUrl }} style={styles.image} />
      <Image
        source={{ uri: detailItem?.BrandIconUrl }}
        style={styles.brandIcon}
      />
      <Text style={styles.title}>
        {detailItem?.Title ? extractTextFromHtml(detailItem.Title) : ""}
      </Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.description}>
          {detailItem?.Description
            ? extractTextFromHtml(detailItem.Description)
            : ""}
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2.2,
    resizeMode: "cover",
    borderBottomLeftRadius: width / 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  brandIcon: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.2,
    position: "absolute",
    top: height * 0.36,
    left: width * 0.02,
    borderWidth: 5,
    borderColor: "white",
    resizeMode: "contain",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    width: width * 0.9,
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  scrollView: {
    width: width * 0.9,
    alignSelf: "center",
  },
  description: {
    fontSize: width * 0.05,
    color: "gray",
    marginTop: height * 0.02,
  },
  joinButton: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: "red",
    borderRadius: width * 0.06,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: height * 0.04,
  },
  joinButtonText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "white",
  },
  backButton: {
    position: "absolute",
    top: width * 0.1,
    left: width * 0.05,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: width * 0.05,
  },
});
