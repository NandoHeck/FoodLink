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
    marginBottom: 14,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 26,
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

  userTypeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  userTypeButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C9CED6",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  userTypeButtonGreen: {
    backgroundColor: "#FFFFFF",
    borderColor: "#2E7D32",
  },

  userTypeButtonActiveWhite: {
    backgroundColor: "#FFFFFF",
    borderColor: "#2E7D32",
  },

  userTypeButtonActiveGreen: {
    backgroundColor: "#2E7D32",
    borderColor: "#2E7D32",
  },

  userTypeButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  userTypeButtonTextGreenBase: {
    color: "#2E7D32",
  },

  userTypeButtonTextActiveWhite: {
    color: "#111827",
  },

  userTypeButtonTextActiveGreen: {
    color: "#FFFFFF",
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
});

export default styles;