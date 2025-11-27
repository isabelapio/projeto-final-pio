import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function RockHistoryPage() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>História do Rock</Text>

      {/* Introdução */}
      <View style={styles.block}>
        <Text style={styles.text}>
          O rock surgiu nos anos 1950 nos Estados Unidos, combinando blues, country e jazz.  
          Tornou-se uma das mais influentes formas de música moderna, moldando gerações.
        </Text>
      </View>

      {/* Principais Períodos */}
      <Text style={styles.sectionTitle}>Principais Períodos</Text>

      <TouchableOpacity style={styles.card} onPress={() => toggle(1)}>
        <Text style={styles.cardTitle}>• Rock & Roll Clássico (1950-1960)</Text>
        {expanded === 1 && (
          <Text style={styles.cardText}>
            Artistas como Elvis Presley e Chuck Berry popularizaram o rock, misturando energia e rebeldia juvenil.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggle(2)}>
        <Text style={styles.cardTitle}>• Rock Psicodélico & Progressivo (1960-1970)</Text>
        {expanded === 2 && (
          <Text style={styles.cardText}>
            Bandas como Pink Floyd e The Doors exploraram novos sons, efeitos e conceitos visuais.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggle(3)}>
        <Text style={styles.cardTitle}>• Punk & Hard Rock (1970-1980)</Text>
        {expanded === 3 && (
          <Text style={styles.cardText}>
            O punk trouxe atitude direta e energia crua; o hard rock expandiu a intensidade sonora.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggle(4)}>
        <Text style={styles.cardTitle}>• Rock Contemporâneo (1990-presente)</Text>
        {expanded === 4 && (
          <Text style={styles.cardText}>
            Subgêneros como grunge, alternativo e metal moderno continuam a evoluir, misturando tradição e inovação.
          </Text>
        )}
      </TouchableOpacity>

      {/* Curiosidades */}
      <Text style={styles.sectionTitle}>Curiosidades</Text>
      <TouchableOpacity style={styles.card} onPress={() => toggle(5)}>
        <Text style={styles.cardTitle}>• Evolução Cultural</Text>
        {expanded === 5 && (
          <Text style={styles.cardText}>
            O rock influenciou moda, cinema, comportamento e política, tornando-se um fenômeno global.
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    minHeight: "100%",
    backgroundColor: "rgb(3, 3, 7)",
    alignItems: "center",
    gap: 25,
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#e0e0ff",
    letterSpacing: 4,
    textTransform: "uppercase",
    textShadowColor: "rgba(70,50,200,0.5)",
    textShadowRadius: 10,
  },

  block: {
    backgroundColor: "rgba(55, 37, 118, 0.3)",
    borderRadius: 12,
    padding: 22,
    maxWidth: 380,
    borderWidth: 1,
    borderColor: "rgba(70,50,200,0.6)",
  },

  text: {
    fontSize: 18,
    color: "#e0e0ff",
    lineHeight: 26,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#cfcfff",
    marginBottom: -10,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "rgba(70,50,200,0.2)",
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(70,50,200,0.5)",
    marginVertical: 8,
  },

  cardTitle: {
    fontSize: 20,
    color: "#e0e0ff",
    fontWeight: "700",
  },

  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: "#dcdcff",
    lineHeight: 22,
  },
});
