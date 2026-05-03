import React from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/ProfileStyles";

export default function ProfileScreen({ setScreen }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Ionicons name="person-circle" size={70} color="#4CAF50" />
        <Text style={styles.name}>Usuário Exemplo</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>


      <Pressable onPress={() => setScreen("home")}>
        <Text style={styles.link}>Sair</Text>
      </Pressable>
    </ScrollView>
  );
}
