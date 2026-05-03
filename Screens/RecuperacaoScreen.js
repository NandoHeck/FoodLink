import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/RecuperacaoStyles";

export default function RecuperacaoScreen({ setScreen }) {
  const [email, setEmail] = useState("");
  const [linkEnviado, setLinkEnviado] = useState(false);

  const handleEnviarLink = () => {
    if (email.trim() !== "") {
      setLinkEnviado(true);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => setScreen("inicio")}>
        <Ionicons name="arrow-back" size={24} color="#2E7D32" />
      </Pressable>

      <Text style={styles.title}>Recuperação de senha</Text>
      <Text style={styles.subtitle}>
        Digite seu email para receber o link de recuperação
      </Text>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#9AA0A6"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Pressable style={styles.button} onPress={handleEnviarLink}>
        <Text style={styles.buttonText}>Enviar link</Text>
      </Pressable>

      {linkEnviado && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Link enviado para o seu email!</Text>
        </View>
      )}
    </View>
  );
}