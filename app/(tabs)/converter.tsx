import React, { useState } from "react";
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

// Simple conversion function
const convertLength = (value, fromUnit, toUnit) => {
  const metersMap = {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
  };

  const valueInMeters = value * metersMap[fromUnit];
  return valueInMeters / metersMap[toUnit];
};

export default function ConverterScreen() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (value.trim()) {
      const res = convertLength(parseFloat(value), "m", "km");
      setResult(res.toString());
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Length Converter</Text>
        <Text style={styles.subtitle}>(m → km)</Text>

        <Text style={styles.label}>Enter value in meters:</Text>
        <TextInput
          placeholder="Enter value"
          keyboardType="decimal-pad"
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button title="Convert" onPress={handleConvert} />
        </View>

        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Result:</Text>
            <Text style={styles.resultValue}>
              {value} m = {result} km
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 15,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#4caf50",
  },
  resultLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});
