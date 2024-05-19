import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RegistroExitosoScreen = ({ route, navigation }) => {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Exitoso</Text>
      <Text style={styles.message}>Te has registrado con éxito al curso:</Text>
      <Text style={styles.courseName}>{curso.title}</Text>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Home")}>
        <AntDesign name="home" size={44} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012350",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  courseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#71acf5",
  },
  homeButton: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
});

export default RegistroExitosoScreen;
