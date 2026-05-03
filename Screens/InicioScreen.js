import React from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/InicioStyles";

export default function InicioScreen({ setScreen }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>FoodLink</Text>

      <Text style={styles.subtitle}>
        Conectando quem quer ajudar com quem precisa
      </Text>

      <Pressable style={styles.button} onPress={() => setScreen("login")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

       <Pressable style={styles.button} onPress={() => setScreen("loginDoador")}>
        <Text style={styles.buttonText}>Entrar como Doador</Text>
      </Pressable>

      <Pressable style={styles.buttonOutline} onPress={() => setScreen("cadastro")}>
        <Text style={styles.buttonOutlineText}>Cadastrar</Text>
      </Pressable>

      <View style={styles.card}>
        <Ionicons name="restaurant" size={40} color="#4CAF50" />
        <Text style={styles.cardText}>
          Doe alimentos e ajude pessoas próximas
        </Text>
      </View>
    </ScrollView>
  );
}
