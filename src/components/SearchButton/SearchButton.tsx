import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Fab, FabIcon } from "@/components/ui/fab";

const SearchIcon = () => <Feather name={"search"} color={"#FFF"} size={24} />;

type Props = {
  onPress: VoidFunction;
};

const SearchButton = ({ onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Fab
        style={styles.button}
        accessibilityHint={"Search and Filter Spells"}
        size={"lg"}
        placement={"bottom right"}
      >
        <FabIcon as={SearchIcon} />
      </Fab>
    </Pressable>
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
