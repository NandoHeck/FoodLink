import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ESTADOS = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

export default function EstadoPicker({ value, onChange, placeholder = "Selecione o estado" }) {
  const [aberto, setAberto] = useState(false);

  function selecionar(estado) {
    onChange(estado);
    setAberto(false);
  }

  return (
    <>
      <Pressable style={styles.input} onPress={() => setAberto(true)}>
        <Text
          style={[
            styles.inputText,
            !value && styles.placeholderText,
          ]}
        >
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#6B7280" />
      </Pressable>

      <Modal
        visible={aberto}
        transparent
        animationType="fade"
        onRequestClose={() => setAberto(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setAberto(false)}>
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecione o estado</Text>
              <Pressable
                onPress={() => setAberto(false)}
                style={styles.closeButton}
                hitSlop={10}
              >
                <Ionicons name="close" size={24} color="#1F2937" />
              </Pressable>
            </View>

            <FlatList
              data={ESTADOS}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator
              style={styles.list}
              renderItem={({ item }) => {
                const selecionado = item === value;
                return (
                  <Pressable
                    style={[
                      styles.item,
                      selecionado && styles.itemSelecionado,
                    ]}
                    onPress={() => selecionar(item)}
                  >
                    <Text
                      style={[
                        styles.itemText,
                        selecionado && styles.itemTextSelecionado,
                      ]}
                    >
                      {item}
                    </Text>
                    {selecionado && (
                      <Ionicons name="checkmark" size={20} color="#2E7D32" />
                    )}
                  </Pressable>
                );
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    fontSize: 16,
    color: "#111827",
    flex: 1,
  },
  placeholderText: {
    color: "#9AA0A6",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: "100%",
    maxWidth: 400,
    maxHeight: "75%",
    overflow: "hidden",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F2937",
  },
  closeButton: {
    padding: 4,
  },
  list: {
    paddingVertical: 6,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F5",
  },
  itemSelecionado: {
    backgroundColor: "#E8F5E9",
  },
  itemText: {
    fontSize: 16,
    color: "#111827",
  },
  itemTextSelecionado: {
    color: "#2E7D32",
    fontWeight: "700",
  },
});