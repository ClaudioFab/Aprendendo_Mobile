//Importação de recursos
import { Image, StyleSheet, Text, ScrollView } from "react-native";

import Header from "@/components/empresa/header";
import Service from "@/components/empresa/service";
import Footer from "@/components/empresa/footer";

//Main
export default function HomeScreen() {
  return (
    <ScrollView style={estilo.container}>
      <Header />
      <Text style={estilo.secao}> Nossos serviços</Text>

      <Service />

      <Footer />
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 20,
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 28,
  },
});
