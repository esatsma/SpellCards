import {View} from 'react-native';

import useSpells from "@/hooks/queries/useSpells";
import SpellList from "@/components/SpellList/SpellList";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";

export default function Index() {
    useStatusBarStyle('light')
  const {data} = useSpells()

    if(!data?.results) {
        return
    }

  return (
      <View style={{padding: 8, flex: 1}}>
        <SpellList spells={data?.results} />
      </View>
  )
}