import { useEffect, TextInput, StyleSheet, Text, Button } from "react-native";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import Auth from "../../components/Auth";
import { View } from "react-native";

export default function AddScreen() {
  const [loading, setLoading] = useState();

  async function registerRestaurant() {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enregistrez votre restaurant</Text>
      <Text>Le restaurant</Text>
      <TextInput style={styles.input} placeholder="Nom du restaurant" />
      <TextInput
        style={styles.input}
        placeholder="Adresse du restaurant (Numéro de rue, Rue, Ville)"
      />
      <TextInput style={styles.input} placeholder="Coût de la livraison" />
      <TextInput
        style={styles.input}
        placeholder="Lien de l'image du restaurant"
      />
      <Button
        color="#C5D096"
        style={styles.btn}
        title="Enregistrer mon restaurant"
        onPress={() => registerRestaurant()}
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
