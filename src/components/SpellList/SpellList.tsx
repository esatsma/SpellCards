import {FlatList, View} from "react-native";
import {SpellCard} from "@/components/SpellCard/Spellcard";
import {SpellResponse} from "@/service/api/requests/spellRequest";

type SpellListProps = {
    spells: (SpellResponse | undefined)[]
}


const SpellList = ({spells}: SpellListProps) => {
    return <FlatList
        data={spells}
        renderItem={
            ({item}) => <SpellCard {...item} />
        }
        ItemSeparatorComponent={() => <View style={{height: 8, backgroundColor: '#d9e5d3' }} />}
    />
}

export default SpellList