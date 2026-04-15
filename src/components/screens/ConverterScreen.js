import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { convertLength } from "../utils/conversion";

export default function ConverterScreen() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const res = convertLength(parseFloat(value), "m", "km");
    setResult(res.toString());
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Length Converter (m → km)</Text>
      <TextInput
        placeholder="Enter value"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <Button title="Convert" onPress={handleConvert} />
      <Text style={{ marginTop: 20 }}>Result: {result}</Text>
    </View>
  );
}