import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HistoricoStyles";
import { buscarHistorico } from "../services/doacaoService";
import { getUidAtual } from "../userSession";

function getStatusConfig(status) {
  if (status === "concluida") {
    return { icon: "checkmark-circle-outline", color: "#2E7D32", label: "Concluída" };
  }
  return { icon: "time-outline", color: "#F9A825", label: "Em andamento" };
}

function HistoricoCard({ item }) {
  const statusConfig = getStatusConfig(item.status);

  const alimento  = item.alimento  || item.tipoAlimento || "";
  const descricao = item.descricao || "";
  const data      = item.data      || (item.criadoEm?.toDate
    ? item.criadoEm.toDate().toLocaleDateString("pt-BR")
    : "");

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
          <Text style={styles.cardTitle}>{alimento}</Text>
        </View>
        <Text style={[styles.statusText, { color: statusConfig.color }]}>
          {statusConfig.label}
        </Text>
      </View>

      <Text style={styles.cardDescription}>{descricao}</Text>
      <Text style={styles.cardDate}>{data}</Text>
    </View>
  );
}

export default function HistoricoScreen({ setScreen }) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const uidDoador = getUidAtual();

    if (uidDoador) {
      buscarHistorico(uidDoador)
        .then((dados) => setHistorico(dados))
        .finally(() => setCarregando(false));
    } else {
      setCarregando(false);
    }
  }, []);

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
        {carregando && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            Carregando...
          </Text>
        )}

        {!carregando && historico.length === 0 && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            Nenhuma doação registrada ainda.
          </Text>
        )}

        {historico.map((item) => (
          <HistoricoCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
