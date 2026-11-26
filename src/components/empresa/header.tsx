import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Wayne Corp</Text>

      <Text style={estilo.subtitulo}>Recursos para Gotham LTDA®</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#1D4ED8",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 14,
    color: "#DBEAFE",
    marginTop: 8,
    textAlign: "center",
  },
});
