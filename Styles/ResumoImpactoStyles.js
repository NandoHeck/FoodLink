import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  content: {
    paddingBottom: 30,
  },

  header: {
    backgroundColor: "#4BA64F",
    paddingTop: 18,
    paddingHorizontal: 10,
    paddingBottom: 22,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 18,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    marginTop: 2,
    marginBottom: 16,
  },

  highlightCard: {
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  highlightIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F9A825",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  highlightTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  highlightSubtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginTop: 2,
  },

  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 20,
  },

  metricCard: {
    width: "31.5%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  metricIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EDF7EE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  metricValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    lineHeight: 32,
  },

  metricLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    lineHeight: 16,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
    paddingHorizontal: 10,
  },

  personCard: {
    marginHorizontal: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  personLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 8,
  },

  personAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF6D9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  personEmoji: {
    fontSize: 20,
  },

  personName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  personDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },

  personTime: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },

  personTag: {
    backgroundColor: "#EEF8EC",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  personTagText: {
    color: "#7BB36F",
    fontSize: 12,
    fontWeight: "500",
  },

  foodSummaryCard: {
    marginHorizontal: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  foodBarBlock: {
    marginBottom: 16,
  },

  foodBarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  foodBarLabel: {
    fontSize: 14,
    color: "#333",
    flex: 1,
    paddingRight: 8,
  },

  foodBarValue: {
    fontSize: 14,
    color: "#2E7D32",
    fontWeight: "600",
  },

  foodBarTrack: {
    width: "100%",
    height: 6,
    borderRadius: 999,
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
  },

  foodBarFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#2E7D32",
  },

  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingTop: 12,
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 16,
    color: "#333",
  },

  totalValue: {
    fontSize: 34,
    fontWeight: "500",
    color: "#4BA64F",
  },

  impactCard: {
    marginHorizontal: 8,
    backgroundColor: "#F9A825",
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    alignItems: "center",
  },

  impactIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  impactTitle: {
    fontSize: 28,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  impactText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 20,
  },
});

export default styles;