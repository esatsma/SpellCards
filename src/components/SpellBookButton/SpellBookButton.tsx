import * as Haptics from 'expo-haptics'
import React, {useState} from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'

import {Feather, Ionicons} from "@expo/vector-icons";
import {useSpellBookStore} from "@/store/spellBookStore/spellBookStore";

export type SpellBookButton = {
    spellId: string
    containerStyle?: StyleProp<ViewStyle>
}

const SpellBookButton = ({ spellId, containerStyle }: SpellBookButton) => {
    const { spells, toggleSpell} = useSpellBookStore()

    const isInSpellBook = spells.includes(spellId)

    return (
            <Pressable
                accessibilityHint={isInSpellBook ? 'Remove from Spellbook' : 'Add to Spellbook'}
                hitSlop={24}
                onPress={() => {
                    toggleSpell(spellId)
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
                }}
            >
                    {isInSpellBook ? (

                        <Ionicons size={28} name="book" color={'#06402B'}  />

                    ) : (
                        <Ionicons size={28} name="book-outline" color={'#06402B'} />
                    )}
            </Pressable>
    )
}

export default SpellBookButton
