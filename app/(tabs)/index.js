import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SAUVEZ DES VIES !</Text>
      <Text>Sauvez des vies avec un don !</Text>
      <Image
        style={styles.image}
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NfOBoqJVyJ8PGtBaU-JuwiAIR5slrMWL-g&s"
        }
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    margin: 40,
    color: "#D16277",
  },
  image: {
    width: 300,
    height: 300,
  },
});
