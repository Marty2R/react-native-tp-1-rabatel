import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.titleSection}>Account</Text>
      <Button style={styles.button} title="Edite Account" />
      <Button style={styles.button} title="Hide Account" />
      <Button style={styles.button} title="Delete Account" />
      <Text></Text>
      <Text style={styles.titleSection}>Display</Text>
      <Button style={styles.button} title="Change for dark mode " />
      <Button style={styles.button} title="visually impaired help " />
      <Text></Text>
      <Text style={styles.titleSection}>Connection</Text>
      <Button style={styles.buttonSignOut} title="sign out " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 35,
    margin: 40,
    color: "#D16277",
    marginVertical: 20,
    marginHorizontal: "auto",
  },
  titleSection: {
    fontWeight: "bold",
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#D16277",
    marginVertical: 10,
    marginHorizontal: "auto",
    width: 200,
  },
  buttonSignOut: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: "auto",
    width: 200,
    backgroundColor: "red",
  },
});
