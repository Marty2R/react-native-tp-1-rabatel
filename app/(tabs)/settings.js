import { Text, View, StyleSheet, Button } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button style={styles.button} title="Edite Account" />
      <Button style={styles.button} title="Hide Account" />
      <Button style={styles.button} title="Delet Account" />
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
  button: {
    margin: 20,
  },
});
