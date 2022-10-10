import React from "react";
import { Text, StyleSheet, View } from "react-native";
import axios from "axios";

import { Tasks, AddTask, NoTask } from "./components";
import { errHandler } from "./utils";

// NOTE: it should be kept by using env variable but sharing it here for public check
const endpoint =
  "https://my-json-server.typicode.com/baymax44/todo-json-server";

const api = axios.create({ baseURL: `${endpoint}` });

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);

  // CRUD actions for RESTful API
  const deleteTask = (id) => {
    api
      .delete(`/tasks/${id}`)
      .then(() => {
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

    api
      .put(`/tasks/${id}`, data)
      .then((res) => {
        setTasks(tasks.map((task) => (task.id === id ? res.data : task)));
      })
      .catch(errHandler);
  };

  const addTask = (text) => {
    // setIsFetching(true);

    api
      .post("/tasks", { text, done: false })
      .then((res) => {
        setTasks([...tasks, res.data]);
        // setIsFetching(false);
      })
      .catch(errHandler);
  };

  const fetchTasks = () => {
    setIsFetching(true);

    api
      .get("/tasks")
      .then((res) => {
        setTasks(res.data);
        setIsFetching(false);
      })
      .catch(errHandler);
  };

  const fetchTask = async (id) => {
    try {
      const res = await api.get(`/tasks/${id}`);
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
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Task Tracker</Text>

        {isFetching ? (
          <NoTask text="Loading..." />
        ) : (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
        )}
      </View>

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
    flex: 1,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
