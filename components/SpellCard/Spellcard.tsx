import {Spell} from "@/types/spellService.type";
import {Text, Pressable, StyleSheet, View} from "react-native";
import {Link} from "expo-router";

export const Spellcard = (spell: Spell) => {
    return <Link href={{
        pathname: '/[spell]',
        params: { spell: spell.index }
    }} style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.title}>
                {spell.name}
            </Text>
            <Text>Spell level: {spell.level}</Text>
        </View>
    </Link>
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 4,
    },
    cardContent: {
        flexDirection: "column"
    },
    title: {
        fontSize: 20
    }
})