import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";

export default function DeftonesScreen() {
  const members = [
    {
      name: "Chino Moreno",
      role: "Vocal / Guitarra",
      photo: "https://i.redd.it/chino-moreno-montreal-2025-v0-igffaruuogof1.jpg?width=3001&format=pjpg&auto=webp&s=3da50f4db61f70502968e89b0478733359b8efef",
    },
    {
      name: "Stephen Carpenter",
      role: "Guitarra",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowxhykpUyjka7cxFbLflM0f8JYzbfqAVgkw&s",
    },
    {
      name: "Sergio Vega (ex-membro)",
      role: "Baixo",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_iD8KZUW6JNJDsNN7mx9afREC0Zmb0YkQw&s",
    },
    {
      name: "Frank Delgado",
      role: "Teclados / Samples",
      photo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deftones%27_Frank_Delgado_on_June_10th%2C_2017_by_Chris_Schwegler.jpg",
    },
    {
      name: "Abe Cunningham",
      role: "Bateria",
      photo: "https://moderndrummer.com/wp-content/uploads/2011/06/Abe-Cunningham-004-218x300.jpg",
    },
  ];

  const albums = [
    {
      title: "White Pony",
      year: "2000",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSh73XkVgn4MgO_cWUxNOFKFU5cGibnq0V_g&s",
    },
    {
      title: "Diamond Eyes",
      year: "2010",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzqGzpxzFtedtOAP80H91uUZHgcfM3FQDOA&s",
    },
    {
      title: "Koi No Yokan",
      year: "2012",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY49z6TioWJMn_cmZq3JopZ1VBsZ7lOfgM3Q&s",
    },
    {
      title: "Ohms",
      year: "2020",
      cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/0/0/e/4/951151598445341.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Deftones</Text>

      <Text style={styles.sectionTitle}>História</Text>
      <Text style={styles.history}>
        Formada em Sacramento nos anos 80, Deftones se tornou uma das bandas mais influentes do rock moderno.
        Misturando agressividade, atmosfera e melodia, criaram uma sonoridade única que atravessa gerações.
      </Text>

      <Text style={styles.sectionTitle}>Integrantes</Text>

      <View style={styles.membersContainer}>
        {members.map((m, i) => (
          <View style={styles.memberCard} key={i}>
            <Image source={{ uri: m.photo }} style={styles.memberPhoto} />
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{m.name}</Text>
              <Text style={styles.memberRole}>{m.role}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Álbuns</Text>

      <View style={styles.albumsContainer}>
        {albums.map((a, i) => (
          <ImageBackground
            key={i}
            source={{ uri: a.cover }}
            style={styles.albumCard}
            imageStyle={{ borderRadius: 14 }}
          >
            {/* Overlay feito só com View, sem dependências */}
            <View style={styles.overlay} />

            <View style={styles.albumTextArea}>
              <Text style={styles.albumTitle}>{a.title}</Text>
              <Text style={styles.albumYear}>{a.year}</Text>
            </View>
          </ImageBackground>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10,10,15)",
    padding: 20,
  },

  title: {
    fontSize: 52,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    letterSpacing: 4,
    textTransform: "uppercase",
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#c5c5ff",
    marginTop: 25,
    marginBottom: 10,
  },

  history: {
    fontSize: 18,
    color: "#dcdcdc",
    lineHeight: 26,
  },

  /* INTEGRANTES */
  membersContainer: {
    marginTop: 10,
    gap: 20,
  },

  memberCard: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  memberPhoto: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 14,
  },

  memberInfo: {
    flex: 1,
  },

  memberName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },

  memberRole: {
    fontSize: 16,
    color: "#bbb",
  },

  /* ÁLBUNS */
  albumsContainer: {
    marginTop: 10,
    gap: 20,
  },

  albumCard: {
    height: 180,
    justifyContent: "flex-end",
    borderRadius: 14,
    overflow: "hidden",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)", // efeito parecido com gradient escuro
  },

  albumTextArea: {
    padding: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  albumTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
  },

  albumYear: {
    fontSize: 16,
    color: "#ccc",
  },
});
