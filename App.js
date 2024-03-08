import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.cards}>Hello World!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cards: {
    backgroundColor: "#006636",
    borderRadius: 16,
    padding: 16,
    color: "fff",
    fontFamily: "JosefinSans-Regular",
  },
});
