import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#007BFF",
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Converter Tab (Stage 0 Feature) */}
      <Tabs.Screen
        name="converter"
        options={{
          title: "Converter",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="swap-horizontal"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Calculator Tab (if you have it) */}
      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculator",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="calculator"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Tasks Tab (NEW Stage 1 Feature) */}
      <Tabs.Screen
        name="notes"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="checkbox"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}