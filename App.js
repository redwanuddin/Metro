import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ToastAndroid,
} from "react-native";

export default function App() {
  return (
    // Main container
    <View style={styles.container}>
      {/* Container for Station and Timetable card */}
      <View style={styles.cardGapping}>
        {/* Station */}
        <TouchableHighlight
          style={styles.cardHighlight}
          onPress={() => ToastAndroid.show("Clicked", ToastAndroid.SHORT)}
        >
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("./assets/ic_station.png")}
            />
            <Text style={styles.cardText}>Stations</Text>
          </View>
        </TouchableHighlight>
        {/* Timetable */}

        <TouchableHighlight
          style={styles.cardHighlightModified}
          onPress={() => ToastAndroid.show("Clicked", ToastAndroid.SHORT)}
        >
          <View style={styles.cardModified}>
            <Image
              style={styles.cardImage}
              source={require("./assets/ic_clock.png")}
            />

            <Text style={styles.cardText}>Timetable</Text>
          </View>
        </TouchableHighlight>
      </View>

      {/* Container for Fare and MRT Pass card */}
      <View style={styles.cardGapping}>
        {/* Fare */}
        <TouchableHighlight
          style={styles.cardHighlight}
          onPress={() => ToastAndroid.show("Clicked", ToastAndroid.SHORT)}
        >
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("./assets/ic_fare.png")}
            />

            <Text style={styles.cardText}>Fare</Text>
          </View>
        </TouchableHighlight>
        {/* MRT Pass */}
        <TouchableHighlight
          style={styles.cardHighlight}
          onPress={() => ToastAndroid.show("Clicked", ToastAndroid.SHORT)}
        >
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("./assets/ic_pass.png")}
            />

            <Text style={styles.cardText}>MTR Pass</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    rowGap: 16,
    margin: 16,
  },
  cardGapping: {
    flexDirection: "row",
    columnGap: 16,
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 160,
    backgroundColor: "#006636",
    borderRadius: 16,
    elevation: 8,
    shadowColor: "#000"
  },
  cardModified: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 160,
    backgroundColor: "#006636",
    borderRadius: 16,
    elevation: 8,
    borderTopEndRadius: 160,
  },
  cardHighlight: {
    activeOpacity: 0.6,
    underlayColor: "#ffffff",
    borderRadius: 16,
  },
  cardHighlightModified: {
    activeOpacity: 0.6,
    underlayColor: "#ffffff",
    borderRadius: 16,
    borderTopEndRadius: 160,
  },
  cardImage: {},

  cardText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    top: 8,
  },
});

// colorDarkGreen #006636
// fontFamily: "JosefinSans-Regular",
