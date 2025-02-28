import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Fab, FabIcon } from "@/components/ui/fab";

const SearchIcon = () => <Feather name={"search"} color={"#FFF"} size={24} />;

const SearchButton = () => {
  return (
    <View style={styles.container}>
      <Fab
        style={styles.button}
        accessibilityHint={"Search and Filter Spells"}
        size={"lg"}
        placement={"bottom right"}
      >
        <FabIcon as={SearchIcon} />
      </Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#06402B",
  },
});

export default SearchButton;
