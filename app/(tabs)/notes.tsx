import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TASKS_STORAGE";

export default function NotesScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load tasks when app starts
  useEffect(() => {
    loadTasks();
  }, []);

  // Save tasks when changed
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  // Load from storage
  const loadTasks = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setTasks(JSON.parse(saved));
      }
    } catch (error) {
      console.log("Error loading tasks");
    }
  };

  // Save to storage
  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
      );
    } catch (error) {
      console.log("Error saving tasks");
    }
  };

  // Add or Edit task
  const addTask = () => {
    if (task.trim() === "") return;

    if (editingId !== null) {
      const updated = tasks.map((item) =>
        item.id === editingId
          ? { ...item, title: task }
          : item
      );

      setTasks(updated);
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now().toString(),
        title: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setTask("");
  };

  // Toggle complete
  const toggleTask = (id) => {
    const updated = tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTasks(updated);
  };

  // Delete task
  const deleteTask = (id) => {
    const filtered = tasks.filter(
      (item) => item.id !== id
    );

    setTasks(filtered);
  };

  // Edit task
  const editTask = (item) => {
    setTask(item.title);
    setEditingId(item.id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskRow}>
      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
      >
        <Text
          style={[
            styles.taskText,
            item.completed && styles.completed,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => editTask(item)}
        >
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => deleteTask(item.id)}
        >
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task Checklist
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={addTask}
        >
          <Text style={styles.addText}>
            {editingId ? "Update" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 16,
  backgroundColor: "#ffffff", // ADD THIS
},

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 15,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },

  addBtn: {
    marginLeft: 8,
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },

  addText: {
    color: "#fff",
    fontWeight: "bold",
  },

  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  taskText: {
    fontSize: 16,
  },

  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
  },

  edit: {
    color: "blue",
  },

  delete: {
    color: "red",
  },
});