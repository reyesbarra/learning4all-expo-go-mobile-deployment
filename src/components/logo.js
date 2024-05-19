import React from "react";
import { StyleSheet, Text, View } from "react-native";

const logo = () => {
  const styles = StyleSheet.create({
    logoContainer: {
      flexDirection: "row",
      justifyContent: "center", // Centra horizontalmente
      marginTop: 80, // Ajusta el margen superior
    },
    logoTextContainer: {
      fontSize: 38,
      fontWeight: "800",
      flexWrap: "nowrap",
      color: "#ffffff",
      textAlign: "center",
    },
    logoTextWhite: {
      fontSize: 38,
      fontWeight: "800",
      flexWrap: "nowrap",
      color: "#ffffff",
    },
    logoTextRed: {
      fontSize: 42,
      fontWeight: "800",
      color: "#ff0000",
      flexWrap: "nowrap",
    },
  });

  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTextContainer}>
        <Text style={styles.logoTextWhite}>Learning</Text>
        <Text style={styles.logoTextRed}>4</Text>
        <Text style={styles.logoTextWhite}>all</Text>
      </Text>
    </View>
  );
};

export default logo;



