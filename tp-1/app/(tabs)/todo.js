import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";

export default function ToDoScreen() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  function add() {
    if (state === "") {
      alert("Input is empty !");
    } else if (data.findIndex((e) => state === e) === -1) {
      setData((data) => [...data, state]);
    } else {
      alert("Already exist");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={setState}
      />
      <Button type="submit" onPress={add} title="Submit" />

      <FlatList
        data={data}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    BorderColor: "#D16277",
    padding: 10,
    width: 300,
    margin: 20,
    borderRadius: 5,
  },
});
