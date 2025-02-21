import { useFocusEffect } from 'expo-router'
import { setStatusBarBackgroundColor, setStatusBarStyle, StatusBarStyle } from 'expo-status-bar'
import { useCallback } from 'react'
import { Platform } from 'react-native'

const isAnimated = true

const useStatusBarStyle = (style: StatusBarStyle) => {
    useFocusEffect(
        useCallback(() => {
            setStatusBarStyle(style, isAnimated)

            if (Platform.OS === 'android') {
                setStatusBarBackgroundColor('transparent', isAnimated)
            }
        }, [style])
    )
}

export default useStatusBarStyle
