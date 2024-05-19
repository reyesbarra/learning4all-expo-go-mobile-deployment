import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import { getCursos } from "../service/productService";

// const Stack = createStackNavigator();

const CursosScreen = ({ route, navigation }) => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AntDesign
        name="tags"
        size={32}
        color="white"
        style={{ alignSelf: "center", marginBottom: 16 }}
      />
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Animated.View
        entering={FadeInDown.delay(500).duration(1000)}
        style={{ flex: 1 }}
      >
        {cursos.map((curso, index) => (
          <View key={index} style={styles.cursoContainer}>
            <Image style={styles.image} source={{ uri: curso.image_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{curso.title}</Text>
              <Text style={styles.description}>{curso.description}</Text>
              <View style={styles.footer}>
                <Text style={styles.instructor}>
                  Instructor: {curso.instructor}
                </Text>


                <TouchableOpacity
                  style={styles.buyButton}
                  onPress={() => navigation.navigate("InfoCurso", { curso: curso })}
                >
                  <Text style={styles.buyButtonText}>Ver Curso</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#012350",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  goBackButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  cursoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#797979",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#797979",
    marginBottom: 8,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  instructor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#797979",
  },
  buyButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#012350",
    borderWidth: 1,
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});

export default CursosScreen;
