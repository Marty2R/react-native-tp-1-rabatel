import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function DonationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation !</Text>
      <Text style={styles.text}>
        Faite un donc pour aidez ceux qui sont dans le besoins !
      </Text>
      <TextInput style={styles.input} placeholder="Nom" />
      <TextInput style={styles.input} placeholder="Prenom" />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Somme du don" />
      <Button
        style={styles.button}
        color="#D16277"
        title="Faire don de cette somme"
      />
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
