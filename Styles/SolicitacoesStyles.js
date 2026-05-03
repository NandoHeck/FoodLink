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
    paddingBottom: 36,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  content: {
    padding: 14,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },

  alimento: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },

  messageBox: {
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },

  messageText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  acceptButton: {
    flex: 1,
    backgroundColor: "#2E7D32",
    borderRadius: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  refuseButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E53935",
    borderRadius: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  refuseButtonText: {
    color: "#E53935",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  feedbackSuccess: {
    marginTop: -4,
    marginBottom: 14,
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#6CC070",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
  },

  feedbackSuccessText: {
    color: "#2E7D32",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },

  feedbackError: {
    marginTop: -4,
    marginBottom: 14,
    backgroundColor: "#FDECEC",
    borderWidth: 1,
    borderColor: "#E57373",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
  },

  feedbackErrorText: {
    color: "#C62828",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;