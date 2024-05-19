import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

const InfoCursoScreen = ({ route, navigation }) => {
  const { curso } = route.params;

  return (
    <Animated.View entering={FadeInDown.delay(500).duration(1000)} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <AntDesign name="tags" size={32} color="white" style={styles.tagsIcon} />
      </View>
      <View style={styles.cursoContainer}>
        <Image style={styles.image} source={{ uri: curso.image_url }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{curso.title}</Text>
          <Text style={styles.information}>{curso.information}</Text>
        </View>
        <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("RegistroExitoso", { curso: curso })}
                >
                  <Text style={styles.buttonText}>Empezar curso</Text>
                </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity> */}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012350",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  goBackButton: {
    position: "absolute",
    top: 35,
    left: 5,
  },
  tagsIcon: {
    marginBottom: 30,
    top:20
  },
  cursoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#012350",
    marginBottom: 8,
    textAlign: "center",
  },
  information: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#012350",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",
    alignSelf: 'center', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default InfoCursoScreen;
