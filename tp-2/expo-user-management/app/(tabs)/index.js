import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Image } from "expo-image";
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";

export default function HomeScreen() {
  const [restaurant, setRestaurant] = useState("");

  fetchRestaurants();

  async function fetchRestaurants() {
    const res = await fetch(
      "https://snxpcqxzpsdlboktulki.supabase.co/rest/v1/restaurant",
      {
        method: "GET",
        headers: {
          apikey: process.env.YOUR_REACT_NATIVE_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.YOUR_REACT_NATIVE_SUPABASE_ANON_KEY}`,
        },
      }
    );

    setRestaurant(await res.json());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commandez</Text>
      <FlatList
        data={restaurant}
        renderItem={(itemData) => {
          <View style={styles.div}>
            <Image
              style={styles.image}
              source={itemData.restaurant_img}
              contentFit="contain"
            />
            <Text style={styles.p}>{itemData.restaurant_name}</Text>
            <Text style={styles.p}>{itemData.restaurant_adress}</Text>
          </View>;
        }}
      />
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
