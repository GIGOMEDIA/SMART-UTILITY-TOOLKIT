import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CalculatorScreen() {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>

      {/* Controls */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.controlBtn} onPress={handleClear}>
          <Text style={styles.controlText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn} onPress={handleDelete}>
          <Text style={styles.controlText}>DEL</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() =>
              btn === "=" ? handleCalculate() : handlePress(btn)
            }
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  display: {
    marginBottom: 20,
    alignItems: "flex-end",
  },
  displayText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  controlBtn: {
    backgroundColor: "#ddd",
    padding: 15,
    flex: 1,
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  controlText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: "22%",
    margin: "1%",
    padding: 20,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
