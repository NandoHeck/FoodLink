import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/CadastroStyle";

export default function CadastroScreen({ setScreen }) {
  const [tipoUsuario, setTipoUsuario] = useState("receptor");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={() => setScreen("inicio")}>
        <Ionicons name="arrow-back" size={24} color="#2E7D32" />
      </Pressable>

      <Text style={styles.title}>Criar conta</Text>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#9AA0A6"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#9AA0A6"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#9AA0A6"
          secureTextEntry
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(85) 99999-9999"
          placeholderTextColor="#9AA0A6"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Localização</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade - Estado"
          placeholderTextColor="#9AA0A6"
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Tipo de usuário</Text>

        <View style={styles.userTypeRow}>
          <Pressable
            style={[
              styles.userTypeButton,
              tipoUsuario === "doador" && styles.userTypeButtonActiveWhite,
            ]}
            onPress={() => setTipoUsuario("doador")}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                tipoUsuario === "doador" && styles.userTypeButtonTextActiveWhite,
              ]}
            >
              Sou doador
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.userTypeButton,
              styles.userTypeButtonGreen,
              tipoUsuario === "receptor" && styles.userTypeButtonActiveGreen,
            ]}
            onPress={() => setTipoUsuario("receptor")}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                styles.userTypeButtonTextGreenBase,
                tipoUsuario === "receptor" && styles.userTypeButtonTextActiveGreen,
              ]}
            >
              Sou receptor
            </Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={styles.submitButton}
        onPress={() =>
          setScreen(tipoUsuario === "receptor" ? "homeReceptor" : "homeDoador")
        }
      >
        <Text style={styles.submitButtonText}>Criar conta</Text>
      </Pressable>
    </ScrollView>
  );
}