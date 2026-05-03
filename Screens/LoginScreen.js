import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../Styles/LoginStyles";

export default function LoginScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Agradecemos pelas suas doações</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <Pressable
        style={styles.forgotPasswordButton}
        onPress={() => setScreen("recuperacao")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => setScreen("homeReceptor")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable onPress={() => setScreen("inicio")}>
        <Text style={styles.link}>Voltar</Text>
      </Pressable>
    </View>
  );
}