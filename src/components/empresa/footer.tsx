import { StyleSheet, Text} from "react-native";

export default function Footer() {
  return (
    <Text style={estilo.texto} >
        Wayne Corp - Gotham LTDA®
    </Text>
  );
}

const estilo = StyleSheet.create({
  texto: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 16,
  },
});
