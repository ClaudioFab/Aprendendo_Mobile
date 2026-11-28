import { StyleSheet, Text, View } from "react-native";

type ServiceProps = { titulo: string; descricao: string; preco: number };

export default function Service({ titulo, descricao, preco }: ServiceProps) {
  return (
    <View style={estilo.card}>
      <Text style={estilo.titulo}>
        {titulo}
      </Text>

      <Text style={estilo.descricao}>
        {descricao}
      </Text>

      <Text style={estilo.preco}>
        A partir de R$ {preco.toFixed(2)}
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
    borderColor: "#8d8e8f",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: "#888887",
    lineHeight: 23,
  },
  preco: {
    fontSize: 18,
    color: "#15803d",
    lineHeight: 23,
    fontWeight: "bold",
  },
});
