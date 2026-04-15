import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConverterScreen from "../screens/ConverterScreen";
import NotesScreen from "../screens/NotesScreen";
import CalculatorScreen from "../screens/CalculatorScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Converter" component={ConverterScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
}