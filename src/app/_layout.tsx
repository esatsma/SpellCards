import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {QueryClientProvider} from "@tanstack/react-query";
import QueryClient from "@/service/caching/queryClient";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import Header from "@/components/ui/Header/Header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <GluestackUIProvider>
        <QueryClientProvider client={QueryClient} >
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{
              headerShown: true,
              header: (props) => <Header title={props.options.title ? props.options.title : props.route.name} onPressBack={props.navigation.goBack} canGoBack={props.navigation.canGoBack()} />}}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name={"[spell]"} options={{headerShown: true}} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </QueryClientProvider>
      </GluestackUIProvider>
  );
}
