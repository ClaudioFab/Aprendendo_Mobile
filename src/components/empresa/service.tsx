import { StyleSheet, Text, View } from "react-native";

export default function Service() {
  return (
    <View style={estilo.card}>
        <Text style={estilo.titulo}>
            Ferramentas para vigilantes
        </Text>

        <Text style={estilo.descricao}>
            Criando tecnologia inovadora para empresas e pessoas vestidas de morcego.
        </Text>
    </View>

  );
}

const estilo = StyleSheet.create({
  card: {
    backgroundColor: "#09090a",
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#8d8e8f',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 8,
  },
descricao: {
    fontSize: 15,
    color: "#888887",
    lineHeight: 23,
  },
});