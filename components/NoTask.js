import { View, Text, StyleSheet } from "react-native";

const NoTask = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>No Tasks to show 😢</Text>
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
