import {Image, StyleSheet, Platform, FlatList, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useSpells from "@/hooks/queries/useSpells";
import {Spellcard} from "@/components/SpellCard/Spellcard";

export default function HomeScreen() {
  const {data, isPending} = useSpells()

  //filter by name, by class, by level

  return (<View style={{padding: 8}}>
        {!isPending && <FlatList
            data={data?.results} renderItem={({item}) => <Spellcard {...item} />}
          ItemSeparatorComponent={() => <View style={{height: 8, backgroundColor: '#d9e5d3' }} />}
        />}
      </View>
  )
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
