import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function HomeScreen() {
  const [restaurant, setRestaurant] = useState([]);

  async function fetchRestaurants() {
    let { data: restaurant, error } = await supabase
      .from("restaurant")
      .select("*");

    setRestaurant(restaurant);
  }

  const refreshData = () => {
    fetchRestaurants();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commandez</Text>
      <Button title="Mettre à jour" onPress={refreshData} />
      <FlatList
        data={restaurant}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <View style={styles.div}>
              <Image
                style={styles.image}
                source={itemData.item.restaurant_img}
                contentFit="contain"
              />
              <Text style={styles.p}>{itemData.item.restaurant_name}</Text>
              <Text style={styles.p}>{itemData.item.restaurant_adress}</Text>
            </View>
          );
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
