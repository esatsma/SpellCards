import {Spell} from "@/types/spellService.type";
import {StyleSheet, View} from "react-native";
import {Link} from "expo-router";
import {Heading} from "@/components/ui/heading";
import {Card} from "@/components/ui/card";
import {Text} from '@/components/ui/text';
import SpellBookButton from "@/components/SpellBookButton/SpellBookButton";
import {SpellResponse} from "@/service/api/requests/spellRequest";

export const SpellCard = (spell: SpellResponse) => {
    return <Link href={{
        pathname: '/[spell]',
        params: { spell: spell.index }
    }} style={styles.card}
    asChild>
        <Card size="md" variant="elevated">
            <View style={styles.cardHeader}>
                <Heading size="md" className="mb-1">
                    {spell.name}
                </Heading>
                <SpellBookButton spellId={spell.index} />
            </View>
            <Text size="sm">Spell level {spell.level}</Text>
        </Card>
    </Link>
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderColor: '#06402B',
        borderWidth: 8,
        borderRadius: 15,
        padding: 4,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardContent: {
        flexDirection: "column",
        padding: 4
    },
    title: {
        fontSize: 24
    }
})