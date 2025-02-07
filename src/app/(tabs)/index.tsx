import {StyleSheet, View} from 'react-native';

import useSpells from "@/hooks/queries/useSpells";
import SpellList from "@/components/SpellList/SpellList";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Index() {
  const { data, pending } = useSpells()

  return (<View style={{padding: 8}}>
    {!pending && <SpellList spells={data} />}
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
