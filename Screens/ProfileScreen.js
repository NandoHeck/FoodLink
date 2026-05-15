import React from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/ProfileStyles";

export default function ProfileScreen({ setScreen, usuario }) {
  const voltar = () => {
    if (usuario?.tipo === "doador") {
      setScreen("homeDoador");
    } else {
      setScreen("homeReceptor");
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={{ marginBottom: 12 }} onPress={voltar}>
        <Ionicons name="arrow-back" size={24} color="#2E7D32" />
      </Pressable>

      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Ionicons name="person-circle" size={70} color="#4CAF50" />
        <Text style={styles.name}>{usuario?.nome ?? "Usuário"}</Text>
        <Text style={styles.email}>{usuario?.email ?? ""}</Text>
      </View>

      <Pressable onPress={() => setScreen("inicio")}>
        <Text style={styles.link}>Sair</Text>
      </Pressable>
    </ScrollView>
  );
}
