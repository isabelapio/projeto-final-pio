import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import Carousel from 'react-native-snap-carousel';

const images = [
  { id: 1, source: require('./assets/privatemusic.jpg') },
  { id: 2, source: require('./assets/whitepony.jpg') },
  { id: 3, source: require('./assets/diamondeyes.jpg') },
];

const { width: screenWidth } = Dimensions.get('window');

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Carrossel de Imagens */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={images}
          renderItem={({ item }) => (
            <Image source={item.source} style={styles.carouselImage} />
          )}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          autoplay
          loop
        />
      </View>

      {/* Texto de Boas-Vindas */}
      <View style={styles.mainText}>
        <Text style={styles.title}>Bem-Vindo ao Universo Deftones!</Text>
        <Text style={styles.subtitle}>Explore a música, história e a arte da banda.</Text>
      </View>

      {/* Seção de Botões de Navegação */}
      <ScrollView horizontal style={styles.navigation}>
        <Text style={styles.navButton}>Sobre a Banda</Text>
        <Text style={styles.navButton}>História da Música</Text>
        <Text style={styles.navButton}>Sobre o Criador</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121', // Fundo escuro, moderno
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#FF9E00', // Borda de destaque
    resizeMode: 'cover',
  },
  mainText: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF9E00',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#D1D1D1',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  navigation: {
    marginTop: 40,
    marginBottom: 30,
  },
  navButton: {
    fontSize: 20,
    color: '#FF9E00',
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 2,
    borderColor: '#FF9E00',
    borderRadius: 25,
    textAlign: 'center',
  },
});
