import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Animated, Easing } from "react-native";

export default function Home() {
  const lines = [
    "No escuro, acende.",
    "No caos, cria.",
    "No silêncio, explode.",
    "Sempre além."
  ];

  // Animação das linhas
  const animValues = useRef(lines.map(() => new Animated.Value(50))).current;
  const opacityValues = useRef(lines.map(() => new Animated.Value(0))).current;

  // Glow pulsante
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação das linhas
    const animations = lines.map((_, i) =>
      Animated.parallel([
        Animated.timing(animValues[i], {
          toValue: 0,
          duration: 600,
          delay: i * 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValues[i], {
          toValue: 1,
          duration: 600,
          delay: i * 300,
          useNativeDriver: true,
        }),
      ])
    );
    Animated.stagger(200, animations).start();

    // Glow pulsante
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Interpolação para glow
  const glowColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(138,43,226,0.3)", "rgba(138,43,226,0.8)"],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            textShadowColor: glowColor,
            textShadowRadius: 15,
          },
        ]}
      >
        Início
      </Animated.Text>

      <Animated.View
        style={[
          styles.card,
          {
            borderColor: glowColor,
            shadowColor: glowColor,
          },
        ]}
      >
        {lines.map((line, i) => (
          <Animated.Text
            key={i}
            style={[
              styles.line,
              {
                transform: [{ translateY: animValues[i] }],
                opacity: opacityValues[i],
              },
            ]}
          >
            {line}
          </Animated.Text>
        ))}
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(3, 3, 7)",
  },

  title: {
    fontSize: 50,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 40,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    padding: 30,
    borderRadius: 16,
    backgroundColor: "rgba(138, 43, 226, 0.25)",
    borderWidth: 1,
    shadowOpacity: 0.6,
    shadowRadius: 12,
    gap: 15,
    alignItems: "center",
  },

  line: {
    fontSize: 26,
    fontWeight: "700",
    color: "#eaeaea",
    letterSpacing: 1,
    textAlign: "center",
  },
});
