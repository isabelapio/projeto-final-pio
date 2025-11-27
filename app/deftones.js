import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function DeftonesPage() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Deftones</Text>

      {/* Introdução */}
      <View style={styles.block}>
        <Text style={styles.subtitle}>Quem são?</Text>
        <Text style={styles.text}>
          Deftones é uma banda americana de Sacramento, formada em 1988.  
          Misturam intensidade e atmosfera, criando um som pesado e ao mesmo tempo etéreo.
        </Text>
      </View>

      {/* Curiosidades */}
      <Text style={styles.sectionTitle}>Curiosidades</Text>
      <TouchableOpacity style={styles.card} onPress={() => toggle(1)}>
        <Text style={styles.cardTitle}>• Origem do Nome</Text>
        {expanded === 1 && (
          <Text style={styles.cardText}>
            “Deftones” combina “Def” (gíria musical dos anos 80) e “tones”, criando algo moderno e único.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggle(2)}>
        <Text style={styles.cardTitle}>• Álbum Icônico</Text>
        {expanded === 2 && (
          <Text style={styles.cardText}>
            “White Pony” (2000) é considerado o ápice da banda, unindo peso, melodia e experimentação.
          </Text>
        )}
      </TouchableOpacity>

      {/* Mini Biografia dos Membros */}
      <Text style={styles.sectionTitle}>Membros</Text>
      <View style={styles.members}>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>Chino Moreno</Text>
          <Text style={styles.memberRole}>Vocal & Guitarra</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>Stephen Carpenter</Text>
          <Text style={styles.memberRole}>Guitarra</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>Abe Cunningham</Text>
          <Text style={styles.memberRole}>Bateria</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>Sergio Vega</Text>
          <Text style={styles.memberRole}>Baixo</Text>
        </View>
      </View>

      {/* Álbums */}
      <Text style={styles.sectionTitle}>Álbuns</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albums}>
        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>White Pony</Text>
        </View>
        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>Around the Fur</Text>
        </View>
        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>Koi No Yokan</Text>
        </View>
        <View style={styles.albumCard}>
          <Text style={styles.albumTitle}>Ohms</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    minHeight: "100%",
    backgroundColor: "rgb(3, 3, 7)",
    alignItems: "center",
    gap: 35,
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#e0e0ff", // azul clarinho, frio
    letterSpacing: 4,
    textTransform: "uppercase",
    textShadowColor: "rgba(70, 50, 200, 0.5)",
    textShadowRadius: 10,
  },

  block: {
    backgroundColor: "rgba(50, 35, 100, 0.3)", // roxo azulado suave
    borderRadius: 12,
    padding: 22,
    maxWidth: 380,
    borderWidth: 1,
    borderColor: "rgba(70, 50, 200, 0.6)",
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#cfcfff",
    marginBottom: 10,
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
    backgroundColor: "rgba(70, 50, 200, 0.2)",
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(70, 50, 200, 0.5)",
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

  members: {
    width: "100%",
    maxWidth: 380,
    gap: 12,
  },

  memberCard: {
    backgroundColor: "rgba(70, 50, 200, 0.2)",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(70,50,200,0.5)",
  },

  memberName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e0e0ff",
  },

  memberRole: {
    fontSize: 16,
    color: "#dcdcff",
    marginTop: 2,
  },

  albums: {
    width: "100%",
    marginTop: 12,
    flexDirection: "row",
    gap: 12,
  },

  albumCard: {
    backgroundColor: "rgba(50, 35, 100, 0.25)",
    width: 140,
    height: 140,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(70,50,200,0.5)",
  },

  albumTitle: {
    color: "#e0e0ff",
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 5,
  },
});
