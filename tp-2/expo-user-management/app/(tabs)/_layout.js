import { Header } from "react-native-elements";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Text>🏠</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Home", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#333" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#333",
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: () => <Text>🛒</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Cart", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#333" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#333",
        }}
      />

      <Tabs.Screen
        name="auth"
        options={{
          title: "Connection",
          tabBarIcon: () => <Text>🧑‍💻</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Connection", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#333" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#333",
        }}
      />
    </Tabs>
  );
}
