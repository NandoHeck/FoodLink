import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/ResumoImpactoStyles";

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
            <Text style={styles.highlightTitle}>Doador Estrela</Text>
            <Text style={styles.highlightSubtitle}>Você ajudou 8 pessoas!</Text>
          </View>
        </View>
      </View>

      <View style={styles.metricsRow}>
        <TopMetricCard icon="cube-outline" value="12" label={"Total de\ndoações"} />
        <TopMetricCard icon="people-outline" value="8" label={"Pessoas\nbeneficiadas"} />
        <TopMetricCard
          icon="trending-up-outline"
          value="45kg"
          label={"Kg\nreaproveitados"}
          valueColor="#F9A825"
        />
      </View>

      <Text style={styles.sectionTitle}>Pessoas Beneficiadas</Text>

      <BeneficiadoCard
        icon="👩"
        nome="Maria Silva"
        descricao="5 doações recebidas"
        tempo="Há 2 dias"
        tag="Família"
      />

      <BeneficiadoCard
        icon="🧑"
        nome="João Santos"
        descricao="3 doações recebidas"
        tempo="Há 5 dias"
        tag="Individual"
      />

      <BeneficiadoCard
        icon="🏢"
        nome="Centro Comunitário"
        descricao="4 doações recebidas"
        tempo="Há 1 semana"
        tag="Instituição"
      />

      <Text style={styles.sectionTitle}>Alimentos Reaproveitados</Text>

      <View style={styles.foodSummaryCard}>
        <FoodBar label="Grãos (Arroz, Feijão)" value="25kg" width="70%" />
        <FoodBar label="Massas e Farinhas" value="12kg" width="42%" />
        <FoodBar label="Conservas e Enlatados" value="8kg" width="22%" />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Geral</Text>
          <Text style={styles.totalValue}>45kg</Text>
        </View>
      </View>

      <View style={styles.impactCard}>
        <View style={styles.impactIconCircle}>
          <Ionicons name="heart-outline" size={26} color="#FFFFFF" />
        </View>

        <Text style={styles.impactTitle}>Impacto Social</Text>
        <Text style={styles.impactText}>
          Suas doações evitaram o desperdício de alimentos e ajudaram famílias
          necessitadas.
        </Text>
      </View>
    </ScrollView>
  );
}