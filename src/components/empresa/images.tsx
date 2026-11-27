import { Image, StyleSheet, View } from "react-native";

export default function Images() {
  return (
    <View >
      <Image style={estilo.imagem}
        //@ volta na raíz
        source={require("@/assets/images/batLogo.png")}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  imagem: {
    width: 200,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    backgroundColor: "#09090a",
  },
});
