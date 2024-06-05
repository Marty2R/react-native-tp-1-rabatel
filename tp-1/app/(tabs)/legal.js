import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function LegalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentions légales !</Text>
      <Text style={styles.textContent}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text style={styles.text}>Promis on vole pas l'argent !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    margin: 40,
    color: "#D16277",
  },
  text: {
    fontSize: 15,
    margin: 10,
  },
  textContent: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    BorderColor: "#D16277",
    padding: 10,
    width: 300,
    margin: 20,
    borderRadius: 5,
  },
  button: {
    margin: 20,
  },
});
