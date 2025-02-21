import {Spell} from "@/types/spellService.type";
import {Pressable, StyleSheet, View} from "react-native";
import {Link} from "expo-router";
import {Heading} from "@/components/ui/heading";
import {Card} from "@/components/ui/card";
import {Text} from '@/components/ui/text';
import SpellBookButton from "@/components/SpellBookButton/SpellBookButton";
import {useState} from "react";

export const SpellCard = (spell: Spell) => {
    const [isPressed, setIsPressed] = useState(false)

    return <Link href={{
        pathname: '/[spell]',
        params: { spell: spell.index }
    }} style={[styles.card, isPressed && styles.pressedCard]}
    asChild>
        <Pressable
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>
            <Card size="md" variant="elevated" style={styles.cardHeader}>
                <Heading size="xl" style={styles.title}>
                    {spell.name}
                </Heading><Text size="md">Spell level {spell.level}</Text>
                <SpellBookButton spellId={spell.index} />
            </Card>
        </Pressable>
    </Link>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderColor: '#06402B',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 4,
    },
    pressedCard: {
        opacity: 0.5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 4
    },
    cardContent: {
        flexDirection: "column",
        padding: 4
    },
    title: {
        color: '#06402B'
    }
})