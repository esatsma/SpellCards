import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Fab, FabIcon } from "@/components/ui/fab";

const SearchIcon = () => <Feather name={"search"} color={"#FFF"} size={24} />;

type Props = {
  onPress: VoidFunction;
};

const SearchButton = ({ onPress }: Props) => {
  return (
    <Fab
      onPress={onPress}
      style={styles.button}
      accessibilityHint={"Search and Filter Spells"}
      size={"lg"}
      placement={"bottom right"}
    >
      <FabIcon as={SearchIcon} />
    </Fab>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 50,
    backgroundColor: "#06402B",
  },
});

export default SearchButton;
