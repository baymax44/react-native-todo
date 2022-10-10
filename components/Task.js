import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Task = ({ id, done, text, onDelete, onToggle }) => {
  const preDelete = () => {
    Alert.alert("Are you sure?", "This task will be deleted.", [
      { text: "Cancel" },
      { text: "OK", onPress: () => onDelete(id) },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onToggle(id)}
      onLongPress={preDelete}
    >
      <View style={styles.itemLeft}>
        <View style={done ? styles.doneSquare : styles.square}></View>
        <Text style={done ? styles.doneText : styles.itemText}>{text}</Text>
      </View>

      {/* <TouchableOpacity>
        <Text style={styles.deleteText}>❌</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 14,
    borderLeftColor: "#FFF",
    borderLeftWidth: 5,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  doneSquare: {
    width: 24,
    height: 24,
    backgroundColor: "green",
    opacity: 0.4,
    borderRadius: 24,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    maxWidth: "80%",
    color: "#333",
  },
  doneText: {
    maxWidth: "80%",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#999",
  },
  markText: {
    fontSize: 12,
  },
});

export default Task;
