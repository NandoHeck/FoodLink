import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/HomeReceptorStyles";

const doacoesMock = [
  {
    id: 1,
    foodName: "Arroz 5kg",
    quantity: "Disponível hoje",
    location: "Eusébio",
    schedule: "Hoje, 14h–18h",
    observations: "Pacote fechado, dentro da validade.",
  },
  {
    id: 2,
    foodName: "Feijão 2kg",
    quantity: "3 pacotes",
    location: "Fortaleza",
    schedule: "Amanhã, 9h–17h",
    observations: "Feijão carioca, lacrado.",
  },
  {
    id: 3,
    foodName: "Macarrão 1kg",
    quantity: "5 unidades",
    location: "Aquiraz",
    schedule: "Hoje, 10h–16h",
    observations: "Massas variadas, embalagem intacta.",
  },
  {
    id: 4,
    foodName: "Leite 1L",
    quantity: "10 caixas",
    location: "Eusébio",
    schedule: "Amanhã, 8h–12h",
    observations: "Leite integral, caixas não abertas.",
  },
  {
    id: 5,
    foodName: "Óleo 900ml",
    quantity: "4 unidades",
    location: "Fortaleza",
    schedule: "Sexta, 13h–17h",
    observations: "Garrafas lacradas e em perfeito estado.",
  },
];

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

  const doacoesFiltradas = doacoesMock.filter((doacao) => {
    const termo = busca.toLowerCase();
    return (
      doacao.foodName.toLowerCase().includes(termo) ||
      doacao.location.toLowerCase().includes(termo)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.leftHeader}>
            <Pressable
              style={styles.backButton}
              onPress={() => setScreen("inicio")}
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

        {doacoesFiltradas.map((doacao) => (
          <DonationCard
            key={doacao.id}
            foodName={doacao.foodName}
            quantity={doacao.quantity}
            location={doacao.location}
            onViewDetails={() => openDonationDetails(doacao)}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Ionicons name="search-outline" size={22} color="#2E7D32" />
          <Text style={[styles.navText, styles.navTextActive]}>Buscar</Text>
        </Pressable>


        <Pressable style={styles.navItem}>
          <Ionicons name="time-outline" size={22} color="#757575" />
          <Text style={styles.navText}>Histórico</Text>
        </Pressable>
      </View>
    </View>
  );
}