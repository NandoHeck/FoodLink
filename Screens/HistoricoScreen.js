import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HistoricoStyles";

const historicoMock = [
  {
    id: 1,
    alimento: "Arroz 5kg",
    descricao: "Enviada para Maria Silva",
    data: "20/03/2026",
    status: "concluida",
  },
  {
    id: 2,
    alimento: "Macarrão 1kg",
    descricao: "Enviada para Ana Paula",
    data: "25/03/2026",
    status: "andamento",
  },
  {
    id: 3,
    alimento: "Leite 1L",
    descricao: "Enviada para Carlos Oliveira",
    data: "15/03/2026",
    status: "concluida",
  },
];

function getStatusConfig(status) {
  if (status === "concluida") {
    return {
      icon: "checkmark-circle-outline",
      color: "#2E7D32",
      label: "Concluída",
    };
  }

  return {
    icon: "time-outline",
    color: "#F9A825",
    label: "Em andamento",
  };
}

function HistoricoCard({ item }) {
  const statusConfig = getStatusConfig(item.status);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.titleRow}>
          <Ionicons
            name={statusConfig.icon}
            size={22}
            color={statusConfig.color}
            style={styles.statusIcon}
          />
          <Text style={styles.cardTitle}>{item.alimento}</Text>
        </View>

        <Text style={[styles.statusText, { color: statusConfig.color }]}>
          {statusConfig.label}
        </Text>
      </View>

      <Text style={styles.cardDescription}>{item.descricao}</Text>
      <Text style={styles.cardDate}>{item.data}</Text>
    </View>
  );
}

export default function HistoricoScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setScreen("homeDoador")}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>Histórico</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {historicoMock.map((item) => (
          <HistoricoCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}