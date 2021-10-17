import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type RowProps = {
  children: React.ReactNode;
  between?: boolean;
  centered?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Row = ({
  children,
  between = false,
  centered = false,
  style,
}: RowProps) => (
  <View
    style={[
      { flexDirection: "row", height: 60 },
      between && { justifyContent: "space-between" },
      centered && { alignItems: "center" },
      style,
    ]}
  >
    {children}
  </View>
);
