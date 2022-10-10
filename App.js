import React from "react";
import { StyleSheet, View } from "react-native";

import { Tasks, AddTask } from "./components";

export default function App() {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: "Doctors Appointment", done: true },
    { id: 2, text: "Meeting at School", done: true },
    { id: 3, text: "Food Shopping", done: false },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, text, done: false }]);
  };

  return (
    <View style={styles.container}>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
      <AddTask onAdd={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
