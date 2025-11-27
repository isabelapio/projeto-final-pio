import { StyleSheet, Text, View, Image, Platform } from "react-native";
import foto from "../assets/pio.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>

      <View style={styles.main}>
        <View>
          <Image source={foto} style={styles.foto} />
        </View>

        <View>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Nome:</Text> Isabela Pio
          </Text>

          <Text style={styles.subtitle}>
            <Text style={styles.bold}>RM:</Text> 08412
          </Text>

          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Endereço:</Text> Rua Aracajú 16-56
          </Text>

          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Cidade:</Text> Presidente Epitácio, SP
          </Text>

          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Estado:</Text> São Paulo
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
    backgroundColor: "#0d0d0d", // fundo dark
  },

  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.06)", // vibe atmosférica
    padding: 20,
    borderRadius: 12,
    backdropFilter: "blur(6px)",
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: 3,
    marginBottom: 30,
    textTransform: "uppercase",
  },

  subtitle: {
    fontSize: 18,
    color: "#e3e3e3",
    marginBottom: 4,
  },

  bold: {
    fontWeight: "bold",
    color: "#9e79ff", // roxo neon suave estilo Deftones
  },

  foto: {
    width: 220,
    height: 220,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#9e79ff",
    shadowColor: "#9e79ff",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});
