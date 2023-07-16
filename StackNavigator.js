import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import About from "./About";

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
