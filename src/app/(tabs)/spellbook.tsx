import {StyleSheet, View, Text} from 'react-native';
import SpellList from "@/components/SpellList/SpellList";
import {useSpellBookStore} from "@/store/spellBookStore/spellBookStore";


export default function SpellBook() {
  const { spells } = useSpellBookStore()

  return (
    <View>
        <SpellList spells={spells} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
