import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ApiService from "../api/ApiService";
import DefaultColors from "../constans/DefaultColors";
import TagItem from "./TagItem";

interface Tag {
  Id: string;
  IconUrl: string;
  Name: string;
  Rank: number;
}

const TagList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    getTagsList();
  }, []);

  const getTagsList = async () => {
    setLoading(true);
    try {
      let response: Tag[] = await ApiService.get("GET_TAGS");
      response = response.sort((a, b) => a.Rank - b.Rank);
      setTags(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tags", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={DefaultColors.primary} />
      ) : (
        <FlatList
          data={tags}
          renderItem={({ item }) => <TagItem item={item} />}
          keyExtractor={(item) => item.Id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 5,
          }}
        />
      )}
    </>
  );
};

export default TagList;

const styles = StyleSheet.create({});
