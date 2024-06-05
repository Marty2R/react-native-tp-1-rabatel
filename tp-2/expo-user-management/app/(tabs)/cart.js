import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Image } from "expo-image";

export default function CartScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Your orders :</Text>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP6IJvQOIKI-YvVwz7tB5XPkvLrGer5SEyA&s"
            }
            contentFit="contain"
          />
          <View style={styles.restoInfo}>
            <Text>JP Sushi</Text>
            <Text>18 Route de Lyon - Neuville-sur-Saöne 69250</Text>
            <Text>Prix : 76.90€</Text>
          </View>
          <View>
            <Button color="#FFF" title="❌" />
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghZDA4me3WDs39y_joJSIvI9GlDtprC4Xxg&s"
            }
            contentFit="contain"
          />
          <View style={styles.restoInfo}>
            <Text>Burger King - Villefranche</Text>
            <Text>12 Avenue de l'europe - Villefranche-sur-Saöne</Text>
            <Text>Prix : 27.70€</Text>
          </View>
          <View>
            <Button color="#FFF" title="❌" />
          </View>
        </View>
      </View>

      <Button color="#333" title="Passer commande ✅" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 2000,
  },
  restoInfo: {
    width: 200,
    marginLeft: 20,
  },
});
