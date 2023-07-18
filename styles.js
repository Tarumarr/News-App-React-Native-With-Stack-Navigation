import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    alignItems: "center",
    marginVertical: "2%",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    marginRight: 10,
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  vitrineItemContainer: {
    width: 200,
    height: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  vitrineItemImage: {
    width: 180,
    height: "50%",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  vitrineItemTextContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  vitrineItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  vitrineItemDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemDescription: {
    fontSize: 14,
  },
  containerAbout: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  imageAbout: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  contentAbout: {
    marginBottom: 20,
  },
  titleAbout: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionAbout: {
    fontSize: 16,
    lineHeight: 24,
  },
  publishedAtContainer: {
    position: 'absolute',
    bottom: 20,
    right: 25,
    flexDirection: 'row',
  },
  publishedAtDate: {
    fontSize: 16,
    marginRight: 10,
  },
  publishedAtTime: {
    fontSize: 16,
  },
  publishedAtText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
