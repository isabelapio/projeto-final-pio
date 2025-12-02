import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const fade = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(30)).current;
  const bgMove = useRef(new Animated.Value(0)).current;

  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 900,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.timing(bgMove, {
        toValue: 1,
        duration: 9000,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.08,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const bgTranslate = bgMove.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 20],
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      {/* CAMADA 1 — GLASS LINES */}
      <Animated.View
        style={[
          styles.movingLines,
          { transform: [{ translateX: bgTranslate }] },
        ]}
      />

      {/* CAMADA 2 — SHAPES GRANDES */}
      <View style={styles.bigShapes}>
        <View style={[styles.circle, styles.c1]} />
        <View style={[styles.circle, styles.c2]} />
      </View>

      {/* CAMADA 3 — PARTÍCULAS */}
      <View style={styles.particles}>
        {Array.from({ length: 14 }).map((_, i) => (
          <View key={i} style={[styles.dot, { left: (i * 30) % width }]} />
        ))}
      </View>

      {/* CONTEÚDO */}
      <Animated.View
        style={[
          styles.content,
          { opacity: fade, transform: [{ translateY: translate }] },
        ]}
      >
        <Text style={styles.heroTitle}>
          Bem-vindo  
          {"\n"}
          <Text style={styles.gradientText}>ao lado mais denso do som. Continue e descubra.</Text>
        </Text>

        <Text style={styles.subtitle}>
         Explore o restante do site e veja tudo o que preparei.
        </Text>

        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Abaixo</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#03030B",
  },

  // ====== CAMADA 1 ======
  movingLines: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    opacity: 0.08,
    backgroundColor: "transparent",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#8A2BE2",
  },

  // ====== CAMADA 2 ======
  bigShapes: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    position: "absolute",
    width: width * 1.4,
    height: width * 1.4,
    borderRadius: width * 1.4,
    opacity: 0.14,
  },

  c1: { backgroundColor: "#8A2BE2", top: -220, right: -140 },
  c2: { backgroundColor: "#0048FF", bottom: -260, left: -160 },

  // ====== CAMADA 3 ======
  particles: {
    position: "absolute",
    width,
    height,
  },

  dot: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#ffffff25",
    top: Math.random() * height,
  },

  // ====== CONTEÚDO ======
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  heroTitle: {
    fontSize: 44,
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 14,
  },

  gradientText: {
    color: "#AA7BFF",
    shadowColor: "#8A2BE2",
    shadowOpacity: 0.6,
    shadowRadius: 14,
  },

  subtitle: {
    fontSize: 17,
    color: "#EAE6FF",
    opacity: 0.9,
    textAlign: "center",
    maxWidth: 330,
    lineHeight: 24,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#8A2BE2",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
