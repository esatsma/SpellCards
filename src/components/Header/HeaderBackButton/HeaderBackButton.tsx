import React from "react";
import { Pressable } from "react-native";

import { Entypo } from "@expo/vector-icons";

type HeaderBackButtonProps = {
  onPress: VoidFunction;
};

const HeaderBackButton = ({ onPress }: HeaderBackButtonProps) => (
  <Pressable
    style={({ pressed }) => [pressed && { opacity: 0.5 }]}
    onPress={onPress}
    hitSlop={12}
  >
    <Entypo name={"chevron-small-left"} size={24} color={"#FFFFFF"} />
  </Pressable>
);

export default HeaderBackButton;
