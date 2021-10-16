import React from "react";
import { View } from "react-native";

type RowProps = {
  children: React.ReactNode;
  between?: boolean;
  centered?: boolean;
};

export const Row = ({
  children,
  between = false,
  centered = false,
}: RowProps) => (
  <View
    style={[
      { flexDirection: "row", height: 60 },
      between && { justifyContent: "space-between" },
      centered && { alignItems: "center" },
    ]}
  >
    {children}
  </View>
);
