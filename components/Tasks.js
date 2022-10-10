import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import Task from "./Task";
import NoTask from "./NoTask";

const Tasks = (props) => {
  if (props.tasks.length < 1) {
    return <NoTask />;
  }

  return (
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
  );
};

const styles = StyleSheet.create({
  items: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
});

export default Tasks;
