import { useEffect, TextInput, StyleSheet, Text, Button } from "react-native";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { View } from "react-native";

export default function AddScreen() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  async function registerRestaurant() {
    const { data, error } = await supabase
      .from("restaurant")
      .insert([
        {
          restaurant_name: name,
          restaurant_adress: adress,
          delivery_fees: price,
          restaurant_img: img,
        },
      ])
      .select();

    console.log(error);
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enregistrez votre restaurant</Text>
      <Text>Le restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom du restaurant"
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse du restaurant (Numéro de rue, Rue, Ville)"
        onChangeText={(adress) => setAdress(adress)}
      />
      <TextInput
        style={styles.input}
        placeholder="Coût de la livraison"
        onChangeText={(price) => setPrice(price)}
      />
      <TextInput
        style={styles.input}
        placeholder="Lien de l'image du restaurant"
        onChangeText={(img) => setImg(img)}
      />
      <Button
        color="#C5D096"
        style={styles.btn}
        title="Enregistrer mon restaurant"
        onPress={registerRestaurant}
      />
    </View>
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
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#C5D096",
    color: "#C5D096",
  },
});
