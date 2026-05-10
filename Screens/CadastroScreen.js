import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/CadastroStyle";
import { salvarUsuario } from "../services/usuarioService";
import { setUidAtual } from "../userSession";

export default function CadastroScreen({ setScreen, setUsuario }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("receptor");
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro() {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Nome, email e senha são obrigatórios.");
      return;
    }
    if (nome.length > 60) {
      Alert.alert("Atenção", "Nome deve ter no máximo 60 caracteres.");
      return;
    }
    if (!emailValido) {
      Alert.alert("Atenção", "Digite um email válido.");
      return;
    }
    if (email.length > 100) {
      Alert.alert("Atenção", "Email muito longo.");
      return;
    }
    if (senha.length < 6) {
      Alert.alert("Atenção", "Senha deve ter no mínimo 6 caracteres.");
      return;
    }
    if (senha.length > 30) {
      Alert.alert("Atenção", "Senha deve ter no máximo 30 caracteres.");
      return;
    }
    if (telefone && telefone.length > 15) {
      Alert.alert("Atenção", "Telefone inválido.");
      return;
    }
    if (localizacao.length > 80) {
      Alert.alert("Atenção", "Localização deve ter no máximo 80 caracteres.");
      return;
    }

    setCarregando(true);
    try {
      const uid = email.toLowerCase();
      await salvarUsuario(uid, {
        nome,
        email,
        telefone,
        localizacao,
        tipo: tipoUsuario,
      });
      setUidAtual(uid);
      setUsuario({ nome, email, tipo: tipoUsuario });
      setScreen(tipoUsuario === "receptor" ? "homeReceptor" : "homeDoador");
    } catch (erro) {
      Alert.alert("Erro ao salvar usuário", erro.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={() => setScreen("inicio")}>
        <Ionicons name="arrow-back" size={24} color="#2E7D32" />
      </Pressable>

      <Text style={styles.title}>Criar conta</Text>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#9AA0A6"
          value={nome}
          onChangeText={setNome}
          maxLength={60}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#9AA0A6"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          maxLength={100}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#9AA0A6"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          maxLength={30}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(85) 99999-9999"
          placeholderTextColor="#9AA0A6"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
          maxLength={15}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Localização</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade - Estado"
          placeholderTextColor="#9AA0A6"
          value={localizacao}
          onChangeText={setLocalizacao}
          maxLength={80}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Tipo de usuário</Text>
        <View style={styles.userTypeRow}>
          <Pressable
            style={[
              styles.userTypeButton,
              tipoUsuario === "doador" && styles.userTypeButtonActiveWhite,
            ]}
            onPress={() => setTipoUsuario("doador")}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                tipoUsuario === "doador" && styles.userTypeButtonTextActiveWhite,
              ]}
            >
              Sou doador
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.userTypeButton,
              styles.userTypeButtonGreen,
              tipoUsuario === "receptor" && styles.userTypeButtonActiveGreen,
            ]}
            onPress={() => setTipoUsuario("receptor")}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                styles.userTypeButtonTextGreenBase,
                tipoUsuario === "receptor" &&
                  styles.userTypeButtonTextActiveGreen,
              ]}
            >
              Sou receptor
            </Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={styles.submitButton}
        onPress={handleCadastro}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Criar conta</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}
