import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NotesScreen() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await AsyncStorage.getItem("notes");
    if (data) setNotes(JSON.parse(data));
  };

  const saveNote = async () => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    setNote("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Write note..."
        value={note}
        onChangeText={setNote}
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button title="Add Note" onPress={saveNote} />

      <FlatList
        data={notes}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}