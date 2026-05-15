import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/ResumoImpactoStyles";
import { buscarImpactoDoador } from "../services/doacaoService";
import { getUidAtual } from "../userSession";

function TopMetricCard({ icon, value, label, valueColor }) {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricIconCircle}>
        <Ionicons name={icon} size={18} color="#2E7D32" />
      </View>
      <Text style={[styles.metricValue, valueColor ? { color: valueColor } : null]}>
        {value}
      </Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function BeneficiadoCard({ icon, nome, descricao, tempo, tag }) {
  return (
    <View style={styles.personCard}>
      <View style={styles.personLeft}>
        <View style={styles.personAvatar}>
          <Text style={styles.personEmoji}>{icon}</Text>
        </View>

        <View>
          <Text style={styles.personName}>{nome}</Text>
          <Text style={styles.personDescription}>{descricao}</Text>
          <Text style={styles.personTime}>{tempo}</Text>
        </View>
      </View>

      <View style={styles.personTag}>
        <Text style={styles.personTagText}>{tag}</Text>
      </View>
    </View>
  );
}

function FoodBar({ label, value, width }) {
  return (
    <View style={styles.foodBarBlock}>
      <View style={styles.foodBarHeader}>
        <Text style={styles.foodBarLabel}>{label}</Text>
        <Text style={styles.foodBarValue}>{value}</Text>
      </View>

      <View style={styles.foodBarTrack}>
        <View style={[styles.foodBarFill, { width }]} />
      </View>
    </View>
  );
}

export default function ResumoImpactoScreen({ setScreen }) {
  const [carregando, setCarregando] = useState(true);
  const [dadosImpacto, setDadosImpacto] = useState({
    totalDoacoes: 0,
    pessoasBeneficiadasCount: 0,
    totalKg: "0kg",
    beneficiados: [],
    alimentosBreakdown: [],
  });

  useEffect(() => {
    async function carregarDados() {
      try {
        const uid = getUidAtual();
        if (uid) {
          const dados = await buscarImpactoDoador(uid);
          setDadosImpacto(dados);
        }
      } catch (error) {
        console.error("Erro ao carregar resumo de impacto:", error);
      } finally {
        setCarregando(false);
      }
    }
    carregarDados();
  }, []);

  if (carregando) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#2E7D32" />
        <Text style={{ marginTop: 10, color: "#2E7D32" }}>Carregando impacto...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setScreen("homeDoador")}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>Resumo de Impacto</Text>
        <Text style={styles.headerSubtitle}>Seu impacto social</Text>

        <View style={styles.highlightCard}>
          <View style={styles.highlightIcon}>
            <Ionicons name="ribbon-outline" size={22} color="#FFFFFF" />
          </View>

          <View>
            <Text style={styles.highlightTitle}>
              {dadosImpacto.pessoasBeneficiadasCount > 5 ? "Doador Estrela" : "Doador Iniciante"}
            </Text>
            <Text style={styles.highlightSubtitle}>
              Você ajudou {dadosImpacto.pessoasBeneficiadasCount} pessoas!
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.metricsRow}>
        <TopMetricCard icon="cube-outline" value={dadosImpacto.totalDoacoes} label={"Total de\ndoações"} />
        <TopMetricCard icon="people-outline" value={dadosImpacto.pessoasBeneficiadasCount} label={"Pessoas\nbeneficiadas"} />
        <TopMetricCard
          icon="trending-up-outline"
          value={dadosImpacto.totalKg}
          label={"Kg\nreaproveitados"}
          valueColor="#F9A825"
        />
      </View>

      <Text style={styles.sectionTitle}>Pessoas Beneficiadas</Text>

      {dadosImpacto.beneficiados.length > 0 ? (
        dadosImpacto.beneficiados.map((b) => (
          <BeneficiadoCard
            key={b.id}
            icon={b.icon}
            nome={b.nome}
            descricao={b.descricao}
            tempo={b.tempo}
            tag={b.tag}
          />
        ))
      ) : (
        <Text style={{ textAlign: "center", color: "#999", marginVertical: 20 }}>
          Nenhuma pessoa beneficiada ainda.
        </Text>
      )}

      <Text style={styles.sectionTitle}>Alimentos Reaproveitados</Text>

      <View style={styles.foodSummaryCard}>
        {dadosImpacto.alimentosBreakdown.length > 0 ? (
          dadosImpacto.alimentosBreakdown.map((a, index) => (
            <FoodBar key={index} label={a.label} value={a.value} width={a.width} />
          ))
        ) : (
          <Text style={{ textAlign: "center", color: "#999", marginVertical: 10 }}>
            Nenhum dado disponível.
          </Text>
        )}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Geral</Text>
          <Text style={styles.totalValue}>{dadosImpacto.totalKg}</Text>
        </View>
      </View>

      <View style={styles.impactCard}>
        <View style={styles.impactIconCircle}>
          <Ionicons name="heart-outline" size={26} color="#FFFFFF" />
        </View>

        <Text style={styles.impactTitle}>Impacto Social</Text>
        <Text style={styles.impactText}>
          {dadosImpacto.totalKg !== "0kg" 
            ? "Suas doações evitaram o desperdício de alimentos e ajudaram famílias necessitadas."
            : "Comece a doar para ver seu impacto social crescer aqui!"}
        </Text>
      </View>
    </ScrollView>
  );
}
