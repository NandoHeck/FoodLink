import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },

  backButton: {
    width: 36,
    height: 36,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 28,
  },

  fieldGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
  },

  textArea: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
    minHeight: 120,
    textAlignVertical: "top",
  },

  submitButton: {
    marginTop: 10,
    backgroundColor: "#2E7D32",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
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
