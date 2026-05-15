import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HomeReceptorStyles";
import { buscarDoacoes } from "../services/doacaoService";
import { setUidAtual } from "../userSession";

function DonationCard({ foodName, quantity, location, onViewDetails }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{foodName}</Text>
      <Text style={styles.cardQuantity}>{quantity}</Text>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={14} color="#777" />
        <Text style={styles.cardLocation}>{location}</Text>
      </View>

      <Pressable style={styles.detailsButton} onPress={onViewDetails}>
        <Text style={styles.detailsButtonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
}

export default function HomeReceptorScreen({ setScreen, openDonationDetails }) {
  const [busca, setBusca] = useState("");
  const [doacoes, setDoacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarDoacoes()
      .then((dados) => setDoacoes(dados))
      .finally(() => setCarregando(false));
  }, []);

  const doacoesFiltradas = doacoes.filter((doacao) => {
    const termo = busca.toLowerCase();
    const nome = (doacao.foodName || doacao.tipoAlimento || "").toLowerCase();
    const local = (doacao.location || doacao.localizacao || "").toLowerCase();
    return nome.includes(termo) || local.includes(termo);
  });

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
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.userName}>Usuário</Text>
            </View>
          </View>

          <Pressable
            style={styles.profileButton}
            onPress={() => setScreen("profile")}
          >
            <Ionicons name="person-outline" size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={18}
            color="#757575"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Buscar alimentos..."
            value={busca}
            onChangeText={setBusca}
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.sectionTitle}>Doações disponíveis</Text>

        {carregando && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            Carregando doações...
          </Text>
        )}

        {!carregando && doacoesFiltradas.length === 0 && (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            Nenhuma doação disponível no momento.
          </Text>
        )}

        {doacoesFiltradas.map((doacao) => (
          <DonationCard
            key={doacao.id}
            foodName={doacao.foodName || doacao.tipoAlimento}
            quantity={doacao.quantity || doacao.quantidade}
            location={doacao.location || doacao.localizacao}
            onViewDetails={() => openDonationDetails(doacao)}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="search-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navText, styles.navTextActive]}>Buscar</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setScreen("historicoReceptor")}
        >
          <Ionicons name="time-outline" size={22} color="#757575" />
          <Text style={styles.navText}>Histórico</Text>
        </Pressable>
      </View>
    </View>
  );
}
