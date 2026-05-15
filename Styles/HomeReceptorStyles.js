import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },

  header: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 14,
    paddingTop: 34,
    paddingBottom: 18,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
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

  searchContainer: {
    position: "relative",
    justifyContent: "center",
  },

  searchIcon: {
    position: "absolute",
    left: 12,
    zIndex: 1,
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingLeft: 36,
    paddingRight: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: "#212121",
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 90,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8,
  },

  cardQuantity: {
    fontSize: 15,
    color: "#616161",
    marginBottom: 8,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  cardLocation: {
    fontSize: 13,
    color: "#757575",
    marginLeft: 4,
  },

  detailsButton: {
    backgroundColor: "#F9A825",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
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

  plusButton: {
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
