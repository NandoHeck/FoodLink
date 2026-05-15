import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },

  header: {
    backgroundColor: "#2E7D32",
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  card: {
    marginHorizontal: 8,
    marginTop: 12,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  foodTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 24,
  },

  infoBlock: {
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  infoTextGroup: {
    marginLeft: 12,
  },

  infoLabel: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 2,
  },

  infoValue: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },

  observacoesBlock: {
    marginBottom: 26,
  },

  observacoesLabel: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 8,
  },

  observacoesText: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 24,
  },

  mensagemLabel: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 8,
    marginTop: 12,
  },

  mensagemInput: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: "#111827",
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: "#F9FAFB",
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  popup: {
    marginTop: 18,
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#6CC070",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignItems: "center",
  },

  popupText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
