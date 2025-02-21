import {StyleSheet, View} from 'react-native';
import SpellList from "@/components/SpellList/SpellList";
import {useSpellBookStore} from "@/store/spellBookStore/spellBookStore";
import useSpells from "@/hooks/queries/useSpells";
import {Link} from "expo-router";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {Text} from '@/components/ui/text'


export default function SpellBook() {
  const { spells } = useSpellBookStore()
  const { data, isFetching } = useSpells()

  const spellBookSpells = data?.results?.filter(spell => spells.includes(spell.index)) || []

  return (
    <View style={styles.container}>
      { spellBookSpells.length === 0 ? <EmptyScreen /> : <SpellList spells={spellBookSpells} />  }
    </View>
  );
}

const EmptyScreen = () => {
  return <View style={styles.emptyList}>
    <Text  size={'2xl'}>You haven't saved any spells to your spellbook yet. To do so, go to the
      <Link href={{pathname: '/(tabs)'}}>Spells screen</Link> and press the{' '}
    <Feather size={28} name="book-open" color={'#06402B'} />-icon</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',

  },
  emptyList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000'
  },
});
