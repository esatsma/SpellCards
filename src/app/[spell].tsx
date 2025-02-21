import {ScrollView, StyleSheet, View} from 'react-native';

import useSpell from "@/hooks/queries/useSpell";
import React from "react";
import {useLocalSearchParams} from "expo-router";
import {Heading} from "@/components/ui/heading";
import {Text} from '@/components/ui/text'
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import {HStack} from "@/components/ui/hstack";
import {FontAwesome6} from "@expo/vector-icons";

export default function Spell() {
    useStatusBarStyle('light')
    const { spell } = useLocalSearchParams<{ spell: string }>()

    const { data, isPending } = useSpell(spell)

    const formatSpellLevel = (spellLevel?: number) => {
        if(!spellLevel || spellLevel === 0) {
            return ''
        }

        if(spellLevel === 1) {
            return '1st-level'
        }

        if(spellLevel === 2) {
            return '2nd-level'
        }

        if(spellLevel === 3) {
            return '3rd-level'
        }

        if(spellLevel > 3) {
            return `${spellLevel}th-level`
        }
    }

     return (
         <ScrollView style={styles.container}>
            <Heading size="2xl" style={styles.title}>{data?.name}</Heading>
             <View style={styles.subTitleContainer}><Text style={styles.subTitle}>{formatSpellLevel(data?.level)} {data?.school.name} {data?.level === 0 ? 'Cantrip' : ''}</Text></View>

             <HStack space={'lg'} style={styles.metaDataContainer}>
                 <View><Heading style={styles.metaData}>Casting Time</Heading><Text style={styles.metaData}>{data?.casting_time}</Text></View>
                 <View><Heading style={styles.metaData}>Range</Heading><Text style={styles.metaData}>{data?.range}</Text></View></HStack>
             <HStack space={'lg'} style={[styles.metaDataContainer, {marginBottom: 8}]} >
                 <View><Heading style={styles.metaData}>Components</Heading><Text style={styles.metaData}>{data?.components}</Text></View>
                 <View><Heading style={styles.metaData}>Duration</Heading><Text style={styles.metaData}>{data?.duration} {data?.concentration && <FontAwesome6 name={'copyright'} size={24}  />}</Text></View>
             </HStack>

             {data?.desc.map((paragraph, index) => <Text key={index} style={{marginBottom: 8}}>{paragraph}</Text>)}
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
       textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#06402B',
        color: '#06402B'
    },
    subTitleContainer: {
       flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    subTitle: {
       fontSize: 16,
    },
    metaDataContainer: {
       justifyContent:'space-evenly',
        textAlign: 'left',
       backgroundColor: '#06402B',
    },
    metaData: {
       color: '#FFF'
    }
});
