import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";

export default function HomeScreen() {
  const [restaurant_name, setRestaurantName] = useState("");
  const [restaurant_adress, setRestaurantAdress] = useState("");
  const [restaurant_img, setRestaurantImg] = useState("");

  getRestaurants();

  async function getRestaurants() {
    const { data, error, status } = await supabase
      .from("restaurant")
      .select("*");

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setRestaurantName(data.restaurant_name);
      setRestaurantAdress(data.restaurant_adress);
      setRestaurantImg(data.restaurant_img);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Commandez</Text>
        <View style={styles.div}>
          <Image
            style={styles.image}
            source={restaurant_img}
            contentFit="contain"
          />
          <Text style={styles.p}>{restaurant_name}</Text>
          <Text style={styles.p}>{restaurant_adress}</Text>
        </View>
      </View>
    </ScrollView>
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
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  p: {
    fontSize: 15,
    marginTop: 15,
  },
});
