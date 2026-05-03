import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  content: {
    paddingBottom: 100,
  },

  header: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 14,
    paddingTop: 28,
    paddingBottom: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    marginBottom: 14,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  greeting: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
  },

  userName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },

  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  statusRow: {
  flexDirection: "row",
  paddingHorizontal: 10,
  marginBottom: 16,
},

statusCardWrapper: {
  flex: 1,
  marginHorizontal: 4,
},

statusCard: {
  backgroundColor: "#F7F7F7",
  borderRadius: 16,
  paddingVertical: 16,
  paddingHorizontal: 8,
  alignItems: "center",
  justifyContent: "center",
  minHeight: 118,
  borderWidth: 1,
  borderColor: "#E0E0E0",
},

  statusIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EAF4EA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  statusValue: {
    fontSize: 26,
    color: "#2E7D32",
    fontWeight: "bold",
    lineHeight: 30,
  },

  statusLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    lineHeight: 16,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E1E1E",
    paddingHorizontal: 12,
    marginBottom: 12,
    marginTop: 6,
  },

  mainActionCard: {
    marginHorizontal: 10,
    backgroundColor: "#56B95D",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  mainActionTextArea: {
    flex: 1,
    paddingRight: 12,
  },

  mainActionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  mainActionSubtitle: {
    color: "#FFFFFF",
    fontSize: 13,
    lineHeight: 18,
  },

  plusCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryActionCard: {
    marginHorizontal: 10,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  secondaryActionTitle: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  secondaryActionSubtitle: {
    color: "#777",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
    maxWidth: 180,
  },

  requestBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#FFF4E2",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  requestBadgeText: {
    color: "#F9A825",
    fontSize: 12,
    marginLeft: 4,
  },

  secondaryIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFF4E2",
    alignItems: "center",
    justifyContent: "center",
  },

  donationCard: {
    backgroundColor: "#F8F8F8",
    marginHorizontal: 10,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    marginBottom: 12,
  },

  donationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },

  donationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F1F1F",
  },

  detailsLink: {
    fontSize: 14,
    color: "#2E7D32",
    fontWeight: "600",
  },

  donationQuantity: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
  },

  interestBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#FFF4E2",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  interestBadgeText: {
    color: "#F9A825",
    fontSize: 12,
    marginLeft: 4,
  },

  noInterestText: {
    color: "#888",
    fontSize: 13,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DADADA",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 12,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
  },

  navText: {
    marginTop: 4,
    fontSize: 12,
    color: "#757575",
  },

  navTextActive: {
    color: "#2E7D32",
  },

  navPlusButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFA726",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -26,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
});

export default styles;