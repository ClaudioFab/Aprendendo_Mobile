import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={estilo.container}>
      <Image
        style={estilo.imagem}
        source={require("../../assets/images/wayneImage.jpg")}
      />

      <Text style={estilo.titulo}>Wayne Corp </Text>

      <Text style={estilo.descricao02}>Recursos para Gotham LTDA®</Text>

      <Text style={estilo.extra03}>Tana nana nana BÁTIMA !!</Text>

      <Image
        style={estilo.imagem02}
        source={require("../../assets/images/batLogo.png")}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  imagem: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
  },
  imagem02: {
    width: 200,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 12,
  },
  titulo: {
    color: "#bdaf71",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
  },
  descricao02: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
  },
  extra03: {
    color: "#7376ad",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    backgroundColor: "#09090a",
  },
});
