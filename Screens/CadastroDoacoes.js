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
import styles from "../Styles/CadastroDoacoesStyles";
import { salvarDoacao } from "../services/doacaoService";

export default function CadastroDoacoes({ setScreen }) {
  const [tipoAlimento, setTipoAlimento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [horario, setHorario] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [publicado, setPublicado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handlePublicar() {
    if (!tipoAlimento || !quantidade || !localizacao) {
      Alert.alert("Atenção", "Tipo de alimento, quantidade e localização são obrigatórios.");
      return;
    }
    if (tipoAlimento.length > 60) {
      Alert.alert("Atenção", "Tipo de alimento deve ter no máximo 60 caracteres.");
      return;
    }
    if (quantidade.length > 30) {
      Alert.alert("Atenção", "Quantidade deve ter no máximo 30 caracteres.");
      return;
    }
    if (horario.length > 40) {
      Alert.alert("Atenção", "Horário deve ter no máximo 40 caracteres.");
      return;
    }
    if (localizacao.length > 80) {
      Alert.alert("Atenção", "Localização deve ter no máximo 80 caracteres.");
      return;
    }
    if (observacoes.length > 300) {
      Alert.alert("Atenção", "Observações deve ter no máximo 300 caracteres.");
      return;
    }

    setCarregando(true);
    try {
      await salvarDoacao({
        tipoAlimento,
        quantidade,
        horario,
        localizacao,
        observacoes,
      });
      setPublicado(true);
    } catch (erro) {
      Alert.alert("Erro ao publicar doação", erro.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable
        style={styles.backButton}
        onPress={() => setScreen("homeDoador")}
      >
        <Ionicons name="arrow-back" size={24} color="#2E7D32" />
      </Pressable>

      <Text style={styles.title}>Cadastrar doação</Text>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Tipo de alimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Arroz, Feijão, Macarrão..."
          placeholderTextColor="#9AA0A6"
          value={tipoAlimento}
          onChangeText={setTipoAlimento}
          maxLength={60}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5kg, 3 unidades..."
          placeholderTextColor="#9AA0A6"
          value={quantidade}
          onChangeText={setQuantidade}
          maxLength={30}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Horário disponível</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Hoje, 14h–18h"
          placeholderTextColor="#9AA0A6"
          value={horario}
          onChangeText={setHorario}
          maxLength={40}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Localização</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade - Bairro"
          placeholderTextColor="#9AA0A6"
          value={localizacao}
          onChangeText={setLocalizacao}
          maxLength={80}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Informações adicionais sobre a doação..."
          placeholderTextColor="#9AA0A6"
          multiline
          value={observacoes}
          onChangeText={setObservacoes}
          maxLength={300}
        />
      </View>

      <Pressable
        style={styles.submitButton}
        onPress={handlePublicar}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Publicar</Text>
        )}
      </Pressable>

      {publicado && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Doação publicada com sucesso!</Text>
        </View>
      )}
    </ScrollView>
  );
}
