import React from "react";
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

const AddTask = ({ onAdd }) => {
  const [text, setText] = React.useState();

  const onPress = () => {
    if (!text) {
      Alert.alert("", "Please add a task.");
      return;
    }

    onAdd(text);
    setText(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Write a task"}
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity onPress={onPress}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  writeTaskWrapper: {
    marginBottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "64%",
    backgroundColor: "#FFF",
    borderRadius: 60,
  },
  addWrapper: {
    width: 48,
    height: 48,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 24,
  },
});

export default AddTask;
