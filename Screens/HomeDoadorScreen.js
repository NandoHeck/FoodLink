import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HomeDoadorStyles";

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

function DonationCard({ title, quantity, interested, empty }) {
  return (
    <View style={styles.donationCard}>
      <View style={styles.donationHeader}>
        <Text style={styles.donationTitle}>{title}</Text>
        <Pressable>
          <Text style={styles.detailsLink}>Ver detalhes</Text>
        </Pressable>
      </View>

      <Text style={styles.donationQuantity}>{quantity}</Text>

      {!empty ? (
        <View style={styles.interestBadge}>
          <Ionicons name="alert-circle-outline" size={12} color="#F9A825" />
          <Text style={styles.interestBadgeText}>{interested}</Text>
        </View>
      ) : (
        <Text style={styles.noInterestText}>Nenhum interessado ainda</Text>
      )}
    </View>
  );
}

export default function HomeDoadorScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.leftHeader}>
              <Pressable style={styles.backButton} onPress={() => setScreen("inicio")}>
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
              </Pressable>

              <View>
                <Text style={styles.greeting}>Bem-vindo,</Text>
                <Text style={styles.userName}>Doador</Text>
              </View>
            </View>

            <Pressable style={styles.profileButton} onPress={() => setScreen("profile")}>
              <Ionicons name="person-outline" size={20} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

      <View style={styles.statusRow}>
        <View style={styles.statusCardWrapper}>
          <StatusCard icon="cube-outline" value="3" label="Doações ativas" />
        </View>
        <View style={styles.statusCardWrapper}>
          <StatusCard icon="notifications-outline" value="5" label="Solicitações" />
        </View>
        <Pressable style={styles.statusCardWrapper} onPress={() => setScreen("resumoImpacto")}>
          <StatusCard icon="trending-up-outline" value="12" label="Total doado" />
        </Pressable>
      </View>

        <Text style={styles.sectionTitle}>Ações rápidas</Text>

        <Pressable style={styles.mainActionCard}>
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

            <View style={styles.requestBadge}>
              <Ionicons name="notifications-outline" size={12} color="#F9A825" />
              <Text style={styles.requestBadgeText}>5 novas solicitações</Text>
            </View>
          </View>

          <View style={styles.secondaryIconCircle}>
            <Ionicons name="notifications-outline" size={22} color="#F9A825" />
          </View>
        </Pressable>

        <Text style={styles.sectionTitle}>Suas doações ativas</Text>

        <DonationCard
          title="Arroz 5kg"
          quantity="Disponível hoje"
          interested="3 interessados"
        />

        <DonationCard
          title="Feijão 2kg"
          quantity="3 pacotes"
          interested="2 interessados"
        />

        <DonationCard
          title="Macarrão 1kg"
          quantity="5 unidades"
          empty
        />
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="cube-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navText, styles.navTextActive]}>Dashboard</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => setScreen("cadastroDoacoes")}>
          <View style={styles.navPlusButton}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.navText}>Doar</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => setScreen("historico")}>
          <Ionicons name="time-outline" size={22} color="#757575" />
            <Text style={styles.navText}>Histórico</Text>
        </Pressable>
      </View>
    </View>
  );
}