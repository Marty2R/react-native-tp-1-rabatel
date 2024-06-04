import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-elements";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NfOBoqJVyJ8PGtBaU-JuwiAIR5slrMWL-g&s"
        }
        contentFit="contain"
      />
      <Text style={styles.title}>SAUVEZ DES VIES !</Text>
      <Text>Sauvez des vies avec un don !</Text>
      <Text style={styles.p}>
        Sauver des Vies est une association à bute non lucratif, Nous aidons
        grace à vos dons les plus demunis. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </Text>
      <Button
        buttonStyle={styles.button}
        title="En savoir plus"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 0,
  },
  title: {
    fontSize: 35,
    color: "#D16277",
  },
  image: {
    width: 370,
    height: 300,
    marginTop: -80,
  },
  p: {
    marginVertical: 50,
    marginHorizontal: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#D16277",
    borderRadius: 5,
    padding: 10,
  },
});
