import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ApiService from "../api/ApiService";
import DefaultColors from "../constans/DefaultColors";

const { width, height } = Dimensions.get("window");

interface Promotion {
  Id: string;
  ImageUrl: string;
  BrandIconUrl: string;
  PromotionCardColor: string;
  Title: string;
}

const MainCard: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    getPromotion();
  }, []);

  const getPromotion = async () => {
    setLoading(true);
    try {
      const response: Promotion[] = await ApiService.get("GET_PROMOTIONS");
      setPromotions(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching promotions", error);
      setLoading(false);
    }
  };

  const extractTextFromHtml = (html: string) => {
    //html taglarinden ayırdım ve &uuml; karakterini ü harfine çevirdim
    const strippedString = html.replace(/<[^>]+>/g, "");
    return strippedString.replace(/&uuml;/g, "ü");
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={DefaultColors.primary} />
      ) : (
        <FlatList
          data={promotions}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity style={styles.promotionCard}>
                <Image
                  source={{ uri: item.ImageUrl }}
                  style={styles.promotionImage}
                />
                <Image
                  source={{ uri: item.BrandIconUrl }}
                  style={styles.brandIcon}
                />
                <Text style={styles.promotionTitle}>
                  {item.Title && extractTextFromHtml(item.Title)}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.promotionTitle,
                      {
                        color: item.PromotionCardColor,
                        marginTop: height * 0.025,
                      },
                    ]}
                  >
                    Daha Daha
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View
                style={[
                  styles.footerView,
                  { backgroundColor: item.PromotionCardColor },
                ]}
              />
            </>
          )}
          keyExtractor={(item) => item.Id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
          pagingEnabled
          onScroll={(event) => {
            const contentOffsetX = event.nativeEvent.contentOffset.x;
            const index = Math.floor(contentOffsetX / width);
            setActiveIndex(index);
          }}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: height * 0.02,
        }}
      >
        {promotions.map((_, index) => (
          <View
            key={index}
            style={{
              width: activeIndex === index ? 20 : 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: "red",
            }}
          />
        ))}
      </View>
    </>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  promotionCard: {
    backgroundColor: "white",
    borderRadius: width * 0.04,
    borderWidth: 1,
    borderColor: "#dedede",
    height: height * 0.58,
    width: width * 0.82,
    padding: width * 0.015,
    zIndex: 2,
    marginHorizontal: width * 0.02,
  },
  promotionImage: {
    width: "100%",
    height: "70%",
    borderRadius: width * 0.03,
    resizeMode: "cover",
    borderBottomLeftRadius: width * 0.3,
  },
  brandIcon: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.2,
    position: "absolute",
    top: height * 0.32,
    left: width * 0.01,
    borderWidth: 5,
    borderColor: "white",
    resizeMode: "contain",
  },
  footerView: {
    height: 60,
    alignSelf: "center",
    position: "absolute",
    top: height * 0.535,
    left: width * 0.02,
    width: width * 0.82,
    borderBottomLeftRadius: width * 0.14,
    borderBottomRightRadius: width * 0.06,
  },
  flatListStyle: {
    paddingLeft: width * 0.01,
    height: height * 0.62,
    marginTop: height * 0.015,
  },
  promotionTitle: {
    fontSize: width * 0.055,
    fontWeight: "bold",
    color: "black",
    marginTop: height * 0.02,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
});
