import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import imagenprincipal from "../../assets/imagenprincipal.png";
import primerIcono from "../../assets/segundoIcono.png";
import segundoIcono from "../../assets/segundoIcono.png";
import tercerIcono from "../../assets/tercerIcono.png";
import cuartoIcono from "../../assets/cuartoIcono.png";
import imgfondo from "../../assets/imgfondo.png";

const InfoSection = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 50,
      marginBottom: 0,
      paddingLeft: 20,
      paddingTop: 10,
      paddingRight: 20,
      position: "relative",
    },
    contentContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: 90, // Margen negativo solo para la imagen
    },
    textContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      
    },
    imageContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    image: {
      height: Dimensions.get("window").height * 0.5 + 60, // Ajuste de la altura para que sobresalga un poco
      width: Dimensions.get("window").width * 0.5,
      resizeMode: "contain",
      marginTop: -240, // Margen superior negativo solo para la imagen
    },
    textRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: "500",
      color: "#ffffff",
      marginLeft: 5,
    },
    icono: {
      width: 25,
      height: 25,

    },
    mainText: {
      fontSize: 32,
      fontWeight: "800",
      flexWrap: "nowrap",
      color: "#ffffff",
      marginBottom: -30,
      textAlign: "left",
    },

    imgfondo: {
        position: "absolute", // Posición absoluta para la imagen de fondo
        bottom: 0, // Alineación en la parte inferior
        left: 0, // Alineación en la parte izquierda
        zIndex: -1, // Colocar la imagen detrás del contenido principal
        width: 200, // Ajusta el tamaño de la imagen según sea necesario
        height: 200, // Ajusta el tamaño de la imagen según sea necesario
      },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Aprende a{"\n"}
        Programar{"\n"}
        Ahora!
      </Text>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          
          
          <View style={styles.textRow}>
            <Image source={primerIcono} style={styles.icono} />
            <Text style={styles.text}>Diseño Web</Text>
          </View>
          <View style={styles.textRow}>
            <Image source={cuartoIcono} style={styles.icono} />
            <Text style={styles.text}>Aplicaciones Web</Text>
          </View>
          <View style={styles.textRow}>
            <Image source={segundoIcono} style={styles.icono} />
            <Text style={styles.text}>Desarrollo Front-end</Text>
          </View>
          <View style={styles.textRow}>
            <Image source={tercerIcono} style={styles.icono} />
            <Text style={styles.text}>Desarrollo Back-end</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imagenprincipal} />
        </View>
        
      </View>
      
    </View>
  );
};

export default InfoSection;
