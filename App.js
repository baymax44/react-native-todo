import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import axios from "axios";

import { Tasks, AddTask } from "./components";
import { errHandler } from "./utils";

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  // CRUD actions for RESTful API
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3333/tasks/${id}`)
      .then((res) => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch(errHandler);
  };

  const toggleDone = async (id) => {
    const task2Update = await fetchTask(id);

    if (!task2Update) {
      return;
    }

    const data = { ...task2Update, done: !task2Update.done };

    axios
      .put(`http://localhost:3333/tasks/${id}`, data)
      .then((res) => {
        setTasks(tasks.map((task) => (task.id === id ? res.data : task)));
      })
      .catch(errHandler);
  };

  const addTask = (text) => {
    axios
      .post("http://localhost:3333/tasks", { text, done: false })
      .then((res) => setTasks([...tasks, res.data]))
      .catch(errHandler);
  };

  const fetchTasks = () => {
    axios
      .get("http://localhost:3333/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch(errHandler);
  };

  const fetchTask = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3333/tasks/${id}`);
      return res.data;
    } catch (error) {
      errHandler(error);
      return null;
    }
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

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
