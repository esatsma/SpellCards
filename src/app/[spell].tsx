import { StyleSheet, View } from 'react-native';

import useSpell from "@/hooks/queries/useSpell";
import { Text } from "react-native";
import React from "react";
import {useLocalSearchParams} from "expo-router";

export default function Spell() {
    const { spell } = useLocalSearchParams<{ spell: string }>()

    const { data, isPending } = useSpell(spell)
     return (
         <View>
            <Text>{data?.name}</Text>
             <Text>{data?.desc.join()}</Text>
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
