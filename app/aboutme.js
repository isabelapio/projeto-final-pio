import { StyleSheet, Text, View, Image, Platform } from "react-native";
import foto from "../assets/pio.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>Sobre mim</Text>
        <View style = {styles.main}>
          <View>
            <Image source={foto} style={styles.foto} />
          </View>
          <View>
            <Text style={styles.subtitle}>
              <Text style = {{fontWeight: "bold"}}> Nome:</Text> Isabela Pio
            </Text>
            <Text style={styles.subtitle}>
              <Text style = {{fontWeight: "bold"}}> RM:</Text> 08412
            </Text>
          <Text style={styles.subtitle}>
              <Text style = {{fontWeight: "bold"}}> Endereço:</Text> Rua Aracajú 16-56
            </Text>
            <Text style={styles.subtitle}>
              <Text style = {{fontWeight: "bold"}}> Cidade:</Text> Presidente Epitácio, SP
            </Text>
            <Text style={styles.subtitle}>
              <Text style = {{fontWeight: "bold"}}> Estado:</Text> São Paulo
            </Text>
          </View>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#4a09ba",
  },

  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#111519",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 10,
    //marginBottom: 20,
  },
});
