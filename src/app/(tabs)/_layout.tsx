import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import TabBarBackground from '@/components/ui/TabBarBackground';
import Header from "@/components/ui/Header/Header";
import {Feather, FontAwesome6} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#06402B',
          tabBarInactiveTintColor: '#2E6F40',
        header: (props) => <Header title={props.options.title ? props.options.title : props.route.name} onPressBack={props.navigation.goBack} canGoBack={props.navigation.canGoBack()} />,
        headerShown: true,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Spells',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="wand-magic-sparkles" color={color} />,
        }}
      />
      <Tabs.Screen
        name="spellbook"
        options={{
          title: 'Spellbook',
          tabBarIcon: ({ color }) => <Feather size={28} name="book-open" color={color} />,
        }}
      />
    </Tabs>
  );
}
