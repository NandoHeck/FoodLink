import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/DetalhesDoacaoStyles";

export default function DetalhesDoacaoScreen({ setScreen, donation }) {
  const [solicitado, setSolicitado] = useState(false);

  const handleSolicitar = () => {
    setSolicitado(true);
  };

  if (!donation) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => setScreen("homeReceptor")}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </Pressable>
          <Text style={styles.headerTitle}>Detalhes da doação</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.foodTitle}>Nenhuma doação selecionada</Text>
          <Pressable
            style={styles.button}
            onPress={() => setScreen("homeReceptor")}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const foodName     = donation.foodName     || donation.tipoAlimento  || "";
  const quantity     = donation.quantity     || donation.quantidade    || "";
  const schedule     = donation.schedule     || donation.horario       || "";
  const location     = donation.location     || donation.localizacao   || "";
  const observations = donation.observations || donation.observacoes   || "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setScreen("homeReceptor")}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Detalhes da doação</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.foodTitle}>{foodName}</Text>

        <View style={styles.infoBlock}>
          <View style={styles.infoRow}>
            <Ionicons name="cube-outline" size={22} color="#2E7D32" />
            <View style={styles.infoTextGroup}>
              <Text style={styles.infoLabel}>Quantidade</Text>
              <Text style={styles.infoValue}>{quantity}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={22} color="#2E7D32" />
            <View style={styles.infoTextGroup}>
              <Text style={styles.infoLabel}>Horário</Text>
              <Text style={styles.infoValue}>{schedule}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={22} color="#2E7D32" />
            <View style={styles.infoTextGroup}>
              <Text style={styles.infoLabel}>Localização</Text>
              <Text style={styles.infoValue}>{location}, CE</Text>
            </View>
          </View>
        </View>

        <View style={styles.observacoesBlock}>
          <Text style={styles.observacoesLabel}>Observações</Text>
          <Text style={styles.observacoesText}>{observations}</Text>
        </View>

        <Pressable style={styles.button} onPress={handleSolicitar}>
          <Text style={styles.buttonText}>Solicitar doação</Text>
        </Pressable>

        {solicitado && (
          <View style={styles.popup}>
            <Text style={styles.popupText}>
              Solicitação de doação enviada com sucesso!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
