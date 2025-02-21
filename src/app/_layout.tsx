import "~/global.css";
import { useFonts } from 'expo-font';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import {QueryClientProvider} from "@tanstack/react-query";
import QueryClient from "@/service/caching/queryClient";
import Header from "@/components/Header/Header";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import {useIsStoreHydrated} from "@/store/spellBookStore/spellBookStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useStatusBarStyle('light')
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const isSpellBookStoreHydrated = useIsStoreHydrated()

  useEffect(() => {
    if (loaded && isSpellBookStoreHydrated) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isSpellBookStoreHydrated]);

  return (
    <GluestackUIProvider mode="light">
        <QueryClientProvider client={QueryClient} >
        <Stack screenOptions={{
          headerShown: true,
          header: (props) => <Header title={props.options.title ? props.options.title : props.route.name} onPressBack={props.navigation.goBack} canGoBack={props.navigation.canGoBack()} />}}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name={"[spell]"} options={{headerShown: true}} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
