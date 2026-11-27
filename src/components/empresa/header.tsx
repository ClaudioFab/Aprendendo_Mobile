import { StyleSheet, Text, View } from "react-native";

import Images from "@/components/empresa/images";

export default function Header() {
  return (
    <View style={estilo.container}>
      <Images />
      <Text style={estilo.titulo}>Wayne Corp</Text>

      <Text style={estilo.subtitulo}>Recursos para Gotham LTDA®</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#8d8e8f',
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    
  },
  subtitulo: {
    fontSize: 14,
    color: "#888887",
    marginTop: 8,
    textAlign: "center",
  },
});
