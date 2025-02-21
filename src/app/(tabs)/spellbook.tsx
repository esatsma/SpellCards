import {SafeAreaView, StyleSheet, View} from 'react-native';
import SpellList from "@/components/SpellList/SpellList";
import {useSpellBookStore} from "@/store/spellBookStore/spellBookStore";
import useSpells from "@/hooks/queries/useSpells";
import {Link} from "expo-router";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {Text} from '@/components/ui/text'
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";


export default function SpellBook() {
  useStatusBarStyle('light')
  const { spells } = useSpellBookStore()
  const { data, isFetching } = useSpells()

  const spellBookSpells = data?.results?.filter(spell => spells.includes(spell.index)) || []

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      { spellBookSpells.length === 0 ? <EmptyScreen /> : <SpellList spells={spellBookSpells} />  }
    </View>
    </SafeAreaView>
  );
}

const EmptyScreen = () => {
  return <View style={styles.emptyList}>
    <Text  size={'2xl'}>You haven't saved any spells to your Spellbook yet. To do so, go to the
      <Link href={{pathname: '/(tabs)'}} style={styles.link}>Spells screen</Link> and press the{' '}
    <Feather size={28} name="book-open" color={'#06402B'} />-icon</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  emptyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  }
});
