import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../Styles/LoginStyles";
import { loginUsuario } from "../services/authService";
import { setUidAtual } from "../userSession";

export default function LoginScreen({ setScreen, definirTelaPorTipo, setUsuario }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin() {

    if (!email || !senha) {
      Alert.alert("Atenção", "Digite email e senha");
      return;
    }

    try {
      const usuarioLogado = await loginUsuario(email, senha);

      // Salva o UID na sessão para o doacaoService usar corretamente
      setUidAtual(usuarioLogado.uid);

      if (setUsuario) {
        setUsuario(usuarioLogado);
      }
      
      // O definirTelaPorTipo no App.js usa o estado global 'usuario'
      // Se passarmos o tipo diretamente, garantimos o redirecionamento imediato
      definirTelaPorTipo(usuarioLogado.tipo);
      
    } catch (error) {
      let mensagem = "Ocorreu um erro ao tentar entrar.";
      
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        mensagem = "E-mail ou senha incorretos.";
      } else if (error.code === 'auth/invalid-email') {
        mensagem = "E-mail inválido.";
      }
      
      Alert.alert("Erro de Login", mensagem);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Agradecemos pelas suas doações</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <Pressable
        style={styles.forgotPasswordButton}
        onPress={() => setScreen("recuperacao")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={fazerLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable onPress={() => setScreen("inicio")}>
        <Text style={styles.link}>Voltar</Text>
      </Pressable>
    </View>
  );
}
