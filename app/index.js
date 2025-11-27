
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import foto1 from "../assets/whitepony.png";
import foto2 from "../assets/diamondeyes.jpg"

const { width: screenWidth } = Dimensions.get("window");

export default function Page() {
  return (
    <View style={styles.container}>

      {/* Imagem de Destaque */}
      <Image
        source={require("../assets/privatemusic.jpg")}
        style={styles.headerImage}
      />

      {/* Texto Central */}
      <View style={styles.mainText}>
        <Text style={styles.title}>Bem-vindo ao Universo Deftones!</Text>
        <Text style={styles.subtitle}>
          Explore a música, história e a arte da banda.
        </Text>
      </View>

      {/* Botões de Navegação */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.navigation}
      >
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>Sobre a Banda</Text>
          <Image source={foto1}></Image>
        </View>

        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>História da Música</Text>
        </View>

        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>Sobre o Criador</Text>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
  },
  headerImage: {
    width: screenWidth,
    height: 240,
    resizeMode: "cover",
    borderBottomWidth: 4,
    borderColor: "#FF9E00",
  },
  mainText: {
    marginTop: 25,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FF9E00",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#CCCCCC",
    textAlign: "center",
    marginTop: 10,
  },
  navigation: {
    marginTop: 35,
  },
  navButton: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#FF9E00",
    marginHorizontal: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: "#FF9E00",
    fontWeight: "bold",
  },
});
