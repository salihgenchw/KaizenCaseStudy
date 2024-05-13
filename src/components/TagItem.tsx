import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

interface TagItemProps {
  item: {
    IconUrl: string;
    Name: string;
  };
}

const TagItem: React.FC<TagItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: item.IconUrl }} style={styles.image} />
      <Text numberOfLines={2} style={styles.tagText}>
        {item.Name}
      </Text>
    </TouchableOpacity>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
    width: width * 0.38,
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 10,
    resizeMode: "contain",
    marginRight: 5,
  },
  tagText: {
    fontSize: 14,
    fontWeight: "500",
    width: width * 0.25,
  },
});
