import { Text, View, StyleSheet, TextInput } from "react-native";

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <TextInput style={styles.input} placeholder="Nom" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    BorderColor: "#D16277",
    padding: 10,
    width: 300,
    margin: 20,
    borderRadius: 5,
  },
});
