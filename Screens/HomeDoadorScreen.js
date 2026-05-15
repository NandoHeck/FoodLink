import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  RefreshControl,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HomeDoadorStyles";
import {
  buscarDoacoesDoador,
  buscarTotalDoado,
  buscarTotalSolicitacoes,
} from "../services/doacaoService";
import { getUidAtual, setUidAtual } from "../userSession";

function StatusCard({ icon, value, label }) {
  return (
    <View style={styles.statusCard}>
      <View style={styles.statusIconCircle}>
        <Ionicons name={icon} size={20} color="#4CAF50" />
      </View>
      <Text style={styles.statusValue}>{value}</Text>
      <Text style={styles.statusLabel}>{label}</Text>
    </View>
  );
}

function DonationCard({ title, quantity, empty }) {
  return (
    <View style={styles.donationCard}>
      <View style={styles.donationHeader}>
        <Text style={styles.donationTitle}>{title}</Text>
      </View>

      <Text style={styles.donationQuantity}>{quantity}</Text>

      {!empty ? (
        <View style={styles.interestBadge}>
          <Ionicons name="alert-circle-outline" size={12} color="#F9A825" />
          <Text style={styles.interestBadgeText}>Disponível</Text>
        </View>
      ) : (
        <Text style={styles.noInterestText}>Nenhuma doação ativa</Text>
      )}
    </View>
  );
}

export default function HomeDoadorScreen({ setScreen }) {
  const [doacoesAtivas, setDoacoesAtivas] = useState([]);
  const [totalDoado, setTotalDoado] = useState(0);
  const [totalSolicitacoes, setTotalSolicitacoes] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const carregarDados = useCallback(async () => {
    const uid = getUidAtual();
    if (!uid) {
      setCarregando(false);
      return;
    }

    try {
      const [ativas, total, solicitacoes] = await Promise.all([
        buscarDoacoesDoador(uid),
        buscarTotalDoado(uid),
        buscarTotalSolicitacoes(uid),
      ]);
      setDoacoesAtivas(ativas);
      setTotalDoado(total);
      setTotalSolicitacoes(solicitacoes);
    } finally {
      setCarregando(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    carregarDados();
  }, [carregarDados]);

  const onRefresh = () => {
    setRefreshing(true);
    carregarDados();
  };

  const handleSair = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim, sair",
          style: "destructive",
          onPress: () => {
            setUidAtual(null);
            setScreen("inicio");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#2E7D32"]}
          />
        }
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.leftHeader}>
              <Pressable
                style={styles.backButton}
                onPress={handleSair}
              >
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
              </Pressable>

              <View>
                <Text style={styles.greeting}>Bem-vindo,</Text>
                <Text style={styles.userName}>Doador</Text>
              </View>
            </View>

            <Pressable
              style={styles.profileButton}
              onPress={() => setScreen("profile")}
            >
              <Ionicons name="person-outline" size={20} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.statusCardWrapper}>
            <StatusCard
              icon="cube-outline"
              value={doacoesAtivas.length.toString()}
              label="Doações ativas"
            />
          </View>
          <View style={styles.statusCardWrapper}>
            <StatusCard
              icon="notifications-outline"
              value={totalSolicitacoes.toString()}
              label="Solicitações"
            />
          </View>
          <Pressable
            style={styles.statusCardWrapper}
            onPress={() => setScreen("resumoImpacto")}
          >
            <StatusCard
              icon="trending-up-outline"
              value={totalDoado.toString()}
              label="Total doado"
            />
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Ações rápidas</Text>

        <Pressable
          style={styles.mainActionCard}
          onPress={() => setScreen("cadastroDoacoes")}
        >
          <View style={styles.mainActionTextArea}>
            <Text style={styles.mainActionTitle}>Cadastrar nova doação</Text>
            <Text style={styles.mainActionSubtitle}>
              Publique um alimento disponível para doação
            </Text>
          </View>

          <View style={styles.plusCircle}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
        </Pressable>

        <Pressable
          style={styles.secondaryActionCard}
          onPress={() => setScreen("solicitacoes")}
        >
          <View>
            <Text style={styles.secondaryActionTitle}>Solicitações recebidas</Text>
            <Text style={styles.secondaryActionSubtitle}>
              Veja quem solicitou suas doações
            </Text>
          </View>

          <View style={styles.secondaryIconCircle}>
            <Ionicons name="notifications-outline" size={22} color="#F9A825" />
          </View>
        </Pressable>

        <Text style={styles.sectionTitle}>Suas doações ativas</Text>

        {carregando && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 10 }}>
            Carregando...
          </Text>
        )}

        {!carregando && doacoesAtivas.length === 0 && (
          <DonationCard
            title="Nenhuma doação ativa"
            quantity="Cadastre uma doação para começar"
            empty
          />
        )}

        {doacoesAtivas.map((doacao) => (
          <DonationCard
            key={doacao.id}
            title={doacao.tipoAlimento}
            quantity={doacao.quantidade}
            empty={false}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="cube-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navText, styles.navTextActive]}>Dashboard</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setScreen("cadastroDoacoes")}
        >
          <View style={styles.navPlusButton}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.navText}>Doar</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setScreen("historico")}
        >
          <Ionicons name="time-outline" size={22} color="#757575" />
          <Text style={styles.navText}>Histórico</Text>
        </Pressable>
      </View>
    </View>
  );
}
