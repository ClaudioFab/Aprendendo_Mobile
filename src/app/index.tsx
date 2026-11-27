//Importação de recursos
import { StyleSheet, Text, ScrollView } from "react-native";

import Header from "@/components/empresa/header";
import Service from "@/components/empresa/service";
import SuporteTecnico from "@/components/empresa/suporteTecnico";
import Footer from "@/components/empresa/footer";

//Main
export default function HomeScreen() {
  return (
    <ScrollView style={estilo.container}>
      <Header />
      <Text style={estilo.secao}> Nossos serviços</Text>

      <Service />
      <SuporteTecnico />
      <Footer />
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#454545",
    padding: 20,
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 28,
  },
});
