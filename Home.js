import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  const navigation = useNavigation();
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28"
    )
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.articles);
      });
  }, []);
  const LogoTitle = () => {
    return (
      <View style={styles.logo}>
        <Text style={styles.logoText}>NEWS</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <FlatList
        data={feed}
        keyExtractor={(item) => {
          return item.title;
        }}
        renderItem={({ item, index }) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigation.navigate('About', { item })}
            >
              <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: item.urlToImage }} />
              </View>
              <View style={styles.title}>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Home;
