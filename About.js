import React from 'react';
import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from 'react-native-safe-area-context';

const About = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.containerAbout}>
      <ScrollView>
        <View>
          {item && (
            <Image style={styles.imageAbout} source={{ uri: item.urlToImage }} />
          )}
        </View>
        <View style={styles.contentAbout}>
          {item && <Text style={styles.titleAbout}>{item.title}</Text>}
          {item && <Text style={styles.descriptionAbout}>{item.content}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
