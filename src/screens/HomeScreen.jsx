import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Logo from "../components/logo";
import InfoSection from "../components/infoSection";
import imgfondo from "../../assets/imgfondo.png";
import imgfondoSmall from "../../assets/imgfondo_small.png"; // Importa la nueva imagen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012350",
    paddingHorizontal: 10,
    position: "relative",
  },
  imgfondo: {
    position: "absolute",
    bottom: -200,
    left: 100,
    right: 0,
    height: "60%", // Ajusta la altura para que solo llegue hasta la mitad de la pantalla
    zIndex: -1,
  },
  imgfondoSmall: {
    position: "absolute",
    top: 20, // Ajusta la posición superior para que esté en la esquina superior izquierda
    left: -5, // Ajusta la posición izquierda para que esté en la esquina superior izquierda
    width: 150, // Ajusta el ancho de la imagen pequeña
    height: 150, // Ajusta el alto de la imagen pequeña
    resizeMode: "cover",
    zIndex: -1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 50,
    right: 50,
    alignItems: "center",
  },
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 100,
    backgroundColor: "#ffffff",
    width: "50%",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <InfoSection />
      {/* Imagen de fondo grande */}
      <Image style={styles.imgfondo} source={imgfondo} />
      {/* Imagen de fondo pequeña */}
      <Image style={styles.imgfondoSmall} source={imgfondoSmall} />

      <TouchableOpacity style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cursos")}
        >
          <Text style={{ fontSize: 24, fontWeight: "900", color: "#012350" }}>
            Cursos
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
