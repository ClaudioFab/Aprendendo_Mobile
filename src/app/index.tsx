//Importação de recursos
import { StyleSheet, Text, ScrollView } from "react-native";

import Header from "@/components/empresa/header";
import Service from "@/components/empresa/service";
import Footer from "@/components/empresa/footer";

//Main
export default function HomeScreen() {
  return (
    <ScrollView style={estilo.container}>
      <Header />
      <Text style={estilo.secao}> Nossos serviços</Text>

      {/*card 1*/}
      <Service
        titulo="Desenvolvimento de Sistemas"
        descricao="Software sob medida, automação e inovação tecnológica."
        preco={199.9}
      />

      {/*card 2*/}
      <Service
        titulo="Consultoria em Tecnologia"
        descricao="Diagnóstico tecnológico e soluções estratégicas para negócios."
        preco={99.9}
      />

      {/*card 3*/}
      <Service
        titulo="Ferramentas para vigilantes"
        descricao="Criando tecnologia inovadora para empresas e pessoas vestidas de morcego."
        preco={249.9}
      />

      {/*card 4*/}
      <Service
        titulo="Suporte Técnico"
        descricao="Atendimento especializado para empresas."
        preco={399.99}
      />

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
