import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/SolicitacoesStyles";

const solicitacoesMock = [
  {
    id: 1,
    nome: "Maria Silva",
    alimento: "Arroz 5kg",
    mensagem: "Preciso para complementar a alimentação da semana.",
    status: "pendente",
  },
  {
    id: 2,
    nome: "João Santos",
    alimento: "Feijão 2kg",
    mensagem: "Gostaria de solicitar essa doação para minha família.",
    status: "pendente",
  },
  {
    id: 3,
    nome: "Ana Paula",
    alimento: "Macarrão 1kg",
    mensagem: "Tenho interesse nessa doação, caso ainda esteja disponível.",
    status: "pendente",
  },
];

function SolicitacaoCard({ solicitacao, onAceitar, onRecusar }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{solicitacao.nome}</Text>
      <Text style={styles.alimento}>{solicitacao.alimento}</Text>

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
  const [solicitacoes, setSolicitacoes] = useState(solicitacoesMock);

  const aceitarSolicitacao = (id) => {
    setSolicitacoes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "aceita" } : item
      )
    );
  };

  const recusarSolicitacao = (id) => {
    setSolicitacoes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "recusada" } : item
      )
    );
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
        {solicitacoes.map((solicitacao) => (
          <View key={solicitacao.id}>
            <SolicitacaoCard
              solicitacao={solicitacao}
              onAceitar={() => aceitarSolicitacao(solicitacao.id)}
              onRecusar={() => recusarSolicitacao(solicitacao.id)}
            />

            {solicitacao.status === "aceita" && (
              <View style={styles.feedbackSuccess}>
                <Text style={styles.feedbackSuccessText}>
                  Solicitação aceita com sucesso.
                </Text>
              </View>
            )}

            {solicitacao.status === "recusada" && (
              <View style={styles.feedbackError}>
                <Text style={styles.feedbackErrorText}>
                  Solicitação recusada.
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}