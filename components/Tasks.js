import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Task from "./Task";
import NoTask from "./NoTask";

const Tasks = (props) => {
  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Task Tracker</Text>

      {props.tasks.length > 0 ? (
        <ScrollView style={styles.items}>
          {props.tasks &&
            props.tasks.map((task) => (
              <Task
                key={task.id}
                onDelete={props.onDelete}
                onToggle={props.onToggle}
                {...task}
              />
            ))}
        </ScrollView>
      ) : (
        <NoTask />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
});

export default Tasks;
