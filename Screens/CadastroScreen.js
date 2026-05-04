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

export default function CadastroScreen({ setScreen }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("receptor");
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Nome, email e senha são obrigatórios.");
      return;
    }

    setCarregando(true);
    try {
      // UID temporário para teste — será substituído pelo Auth do Gabriel
      const uidTemporario = `temp_${Date.now()}`;

      await salvarUsuario(uidTemporario, {
        nome,
        email,
        telefone,
        localizacao,
        tipo: tipoUsuario,
      });

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
