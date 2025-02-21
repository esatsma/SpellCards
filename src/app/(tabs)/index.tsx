import {View} from 'react-native';

import useSpells from "@/hooks/queries/useSpells";
import SpellList from "@/components/SpellList/SpellList";
import {queryClient} from "@/service/caching";

export default function Index() {
  const {data} = useSpells()

    if(!data?.results) {
        return
    }

  return (
      <View style={{padding: 8}}>
        <SpellList spells={data?.results} />
      </View>
  )
}