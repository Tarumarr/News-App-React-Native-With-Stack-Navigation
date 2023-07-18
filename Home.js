import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, RefreshControl, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const navigation = useNavigation();
  const [feed, setFeed] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredFeed, setFilteredFeed] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28"
    )
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.articles);
        setFilteredFeed(re.articles);
      });
  }, []);

  useEffect(() => {
    const filteredData = feed.filter((item) =>
      item.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredFeed(filteredData);
  }, [searchKeyword]);

  const LogoTitle = () => {
    return (
      <View style={styles.logo}>
        <Text style={styles.logoText}>Taru News</Text>
      </View>
    );
  };

  const handleItemPress = (item) => {
    navigation.navigate('About', { item });
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
  };

  const renderVitrineItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.vitrineItemContainer}>
          <Image style={styles.vitrineItemImage} source={{ uri: item.urlToImage }} />
          <View style={styles.vitrineItemTextContainer}>
            <Text style={styles.vitrineItemTitle}>{item.title}</Text>
            <Text style={styles.vitrineItemDescription} numberOfLines={10}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.listItemContainer}>
          <Image style={styles.listItemImage} source={{ uri: item.urlToImage }} />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemDescription} numberOfLines={10}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const refreshFeed = () => {
    setRefreshing(true);
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28"
    )
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.articles);
        setFilteredFeed(re.articles);
        setRefreshing(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchKeyword}
          onChangeText={setSearchKeyword}
        />
        {searchKeyword !== "" && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
            <Text style={styles.clearButtonText}>Sil</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        contentContainerStyle={styles.vitrineContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshFeed} />
        }
      >
        {filteredFeed.slice(0, 10).map((item) => (
          <TouchableOpacity key={item.title} onPress={() => handleItemPress(item)}>
            <View style={styles.vitrineItemContainer}>
              <Image style={styles.vitrineItemImage} source={{ uri: item.urlToImage }} />
              <View style={styles.vitrineItemTextContainer}>
                <Text style={styles.vitrineItemTitle}>{item.title}</Text>
                <Text style={styles.vitrineItemDescription} numberOfLines={10}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={filteredFeed.slice(10)}
        keyExtractor={(item) => item.title}
        renderItem={renderListItem}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshFeed} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
