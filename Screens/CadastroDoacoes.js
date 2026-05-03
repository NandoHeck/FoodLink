import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/CadastroDoacoesStyles";

export default function CadastroDoacoes({ setScreen }) {
  const [tipoAlimento, setTipoAlimento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [horario, setHorario] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [publicado, setPublicado] = useState(false);

  const handlePublicar = () => {
    setPublicado(true);
  };

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
        />
      </View>

      <Pressable style={styles.submitButton} onPress={handlePublicar}>
        <Text style={styles.submitButtonText}>Publicar</Text>
      </Pressable>

      {publicado && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Doação publicada com sucesso!</Text>
        </View>
      )}
    </ScrollView>
  );
}