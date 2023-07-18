import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const About = ({ route }) => {
  const { item } = route.params;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const formattedDate = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return { formattedDate, formattedTime };
  };

  const formattedDate = formatDate(item.publishedAt);

  return (
    <SafeAreaView style={styles.containerAbout}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          {item && (
            <Image
              style={styles.imageAbout}
              source={{ uri: item.urlToImage }}
            />
          )}
        </View>
        <View style={styles.contentAbout}>
          {item && <Text style={styles.titleAbout}>{item.title}</Text>}
          {item && <Text style={styles.descriptionAbout}>{item.content}</Text>}
        </View>
        <View style={styles.publishedAtContainer}>
          <Text style={styles.publishedAtText}>
            {formattedDate.formattedDate}
          </Text>
          <Text style={styles.publishedAtText}>
            {formattedDate.formattedTime}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
