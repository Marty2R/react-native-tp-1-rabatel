import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";

export default function DonationScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Make a donation</Text>
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

        <View style={styles.div}>
          <Text style={styles.titleSmall}>Make a donation with PayPal</Text>
          <Image
            style={styles.image}
            source={
              "https://lavendercottagecattery.co.uk/wp-content/uploads/2022/10/CITYPNG.COMDownload-PayPal-Yellow-Payment-Button-PNG-2100x770-2.png"
            }
            contentFit="contain"
          />
        </View>

        <View style={styles.div}>
          <Text style={styles.titleSmall}>Faire un don en personne</Text>
          <Text>
            Venez faire un don en personne au 18 Rue Randon, 69700 Lyon Gerlan
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 35,
    margin: 40,
    color: "#D16277",
  },
  titleSmall: {
    fontSize: 25,
    margin: 40,
    color: "#D16277",
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 100,
    margin: "auto",
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
  div: {
    marginVertical: 50,
    textAlign: "center",
  },
});
