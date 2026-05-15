import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/RecuperacaoStyles";

import { recuperarSenha } from "../services/authService";
import { Alert, ActivityIndicator } from "react-native";

export default function RecuperacaoScreen({ setScreen }) {
  const [email, setEmail] = useState("");
  const [linkEnviado, setLinkEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleEnviarLink = async () => {
    if (email.trim() === "") {
      Alert.alert("Atenção", "Por favor, digite seu e-mail.");
      return;
    }

    setCarregando(true);
    try {
      await recuperarSenha(email);
      setLinkEnviado(true);
    } catch (error) {
      let mensagem = "Ocorreu um erro ao enviar o e-mail de recuperação.";
      if (error.code === 'auth/user-not-found') {
        mensagem = "Usuário não encontrado com este e-mail.";
      } else if (error.code === 'auth/invalid-email') {
        mensagem = "E-mail inválido.";
      }
      Alert.alert("Erro", mensagem);
    } finally {
      setCarregando(false);
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

      <Pressable style={styles.button} onPress={handleEnviarLink} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Enviar link</Text>
        )}
      </Pressable>


      {linkEnviado && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Link enviado para o seu email!</Text>
        </View>
      )}
    </View>
  );
}
