import {ScrollView, StyleSheet, View} from 'react-native';

import useSpell from "@/hooks/queries/useSpell";
import { Text } from "react-native";
import React from "react";
import {useLocalSearchParams} from "expo-router";
import {Heading} from "@/components/ui/heading";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";

export default function Spell() {
    useStatusBarStyle('light')
    const { spell } = useLocalSearchParams<{ spell: string }>()

    const { data, isPending } = useSpell(spell)
     return (
         <ScrollView style={styles.container}>
            <Heading size="xl" style={styles.title}>{data?.name}</Heading>
             <View style={styles.subTitle}><Text>{data?.level}</Text><Text>{data?.school.name}</Text></View>

             <Text>{data?.components}</Text>

             <Text>{data?.concentration}</Text>
             <Text>{data?.duration}</Text>
             <Text>{data?.casting_time}</Text>
             <Text>{data?.level}</Text>
             <Text>{data?.desc.join()}</Text>
             <Text>{data?.higher_level}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
   container: {
       padding: 8,
       flexDirection: 'column'
   },
    title: {
       alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#06402B',
        color: '#06402B'
    },
    subTitle: {
       flexDirection: 'row',
       fontSize: 12
    }
});
