import { View, Text, StyleSheet } from "react-native";

const NoTask = ({ text = "No Tasks to show 😢" }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  title: {
    fontSize: 16,
  },
});

export default NoTask;
