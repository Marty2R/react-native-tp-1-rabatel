import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commandez</Text>
      <View style={styles.div}>
        <Image
          style={styles.image}
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArkE8ug_aNv82OfMlrzxTTzf0uxUKy39xLQ&s"
          }
          contentFit="contain"
        />
        <Text style={styles.p}>Resteaurant du Centre - Caluire et Cuire</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  div: {
    marginHorizontal: "auto",
    marginVertical: 5,
    width: 350,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: 350,
    height: 200,
  },
  p: {
    fontSize: 15,
    marginTop: 15,
  },
});
