import { StyleSheet, Text, View } from "react-native";

//main
export default function HomeScreen() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Hello, I'm Bátima!</Text>

      <Text style={estilo.descricao02}>Desenvolvido com react nativo</Text>

      <Text style={estilo.extra03}>Tana nana nana BÁTMA!!</Text>
    </View>
  );
}

// css
const estilo = StyleSheet.create({
  titulo: {
    color: "green",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32
  },

  descricao02:{
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32
  },
  extra03:{
    color: "#cf696e",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    backgroundColor: "#071625"
  },
});
