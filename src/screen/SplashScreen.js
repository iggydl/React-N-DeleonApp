import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("HomeScreenTwo"); // Navigate to the home screen after 3 seconds
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/PerezOptical.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000", // Your theme color
  },
  image: {
    width: '100%', // Adjust size
    height: '100%',
    resizeMode: "contain",
  },
});

export default SplashScreen;