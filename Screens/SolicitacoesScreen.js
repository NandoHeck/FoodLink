import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/SolicitacoesStyles";
import {
  buscarSolicitacoesDoador,
  aceitarSolicitacao,
  recusarSolicitacao,
} from "../services/doacaoService";
import { getUidAtual } from "../userSession";

function SolicitacaoCard({ solicitacao, onAceitar, onRecusar }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{solicitacao.nomeReceptor || "Receptor"}</Text>
      <Text style={styles.alimento}>{solicitacao.tipoAlimento}</Text>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{solicitacao.mensagem}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.acceptButton} onPress={onAceitar}>
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
          <Text style={styles.acceptButtonText}>Aceitar</Text>
        </Pressable>

        <Pressable style={styles.refuseButton} onPress={onRecusar}>
          <Ionicons name="close" size={18} color="#E53935" />
          <Text style={styles.refuseButtonText}>Recusar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function SolicitacoesScreen({ setScreen }) {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [respondidas, setRespondidas] = useState({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const uid = getUidAtual();
    if (uid) {
      buscarSolicitacoesDoador(uid)
        .then((dados) => setSolicitacoes(dados))
        .finally(() => setCarregando(false));
    } else {
      setCarregando(false);
    }
  }, []);

  const handleAceitar = async (solicitacao) => {
    try {
      await aceitarSolicitacao(
        solicitacao.id,
        solicitacao.doacaoId,
        solicitacao.uidReceptor
      );
      setRespondidas((prev) => ({ ...prev, [solicitacao.id]: "aceita" }));
    } catch {
      Alert.alert("Erro", "Não foi possível aceitar a solicitação.");
    }
  };

  const handleRecusar = async (solicitacao) => {
    try {
      await recusarSolicitacao(solicitacao.id);
      setRespondidas((prev) => ({ ...prev, [solicitacao.id]: "recusada" }));
    } catch {
      Alert.alert("Erro", "Não foi possível recusar a solicitação.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setScreen("homeDoador")}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Solicitações recebidas</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {carregando && (
          <ActivityIndicator color="#2E7D32" style={{ marginTop: 40 }} />
        )}

        {!carregando && solicitacoes.length === 0 && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 40 }}>
            Nenhuma solicitação recebida ainda.
          </Text>
        )}

        {solicitacoes.map((solicitacao) => {
          const resposta = respondidas[solicitacao.id];

          if (resposta === "aceita") {
            return (
              <View key={solicitacao.id} style={styles.feedbackSuccess}>
                <Text style={styles.feedbackSuccessText}>
                  Solicitação de {solicitacao.nomeReceptor || "receptor"} aceita. Doação marcada como concluída!
                </Text>
              </View>
            );
          }

          if (resposta === "recusada") {
            return (
              <View key={solicitacao.id} style={styles.feedbackError}>
                <Text style={styles.feedbackErrorText}>
                  Solicitação de {solicitacao.nomeReceptor || "receptor"} recusada.
                </Text>
              </View>
            );
          }

          return (
            <SolicitacaoCard
              key={solicitacao.id}
              solicitacao={solicitacao}
              onAceitar={() => handleAceitar(solicitacao)}
              onRecusar={() => handleRecusar(solicitacao)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
