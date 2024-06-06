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
              containerStyle={{ backgroundColor: "#C5D096" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#C5D096",
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
              containerStyle={{ backgroundColor: "#C5D096" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#C5D096",
        }}
      />

      <Tabs.Screen
        name="auth"
        options={{
          title: "Account",
          tabBarIcon: () => <Text>🧑‍💻</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Connection", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#C5D096" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#C5D096",
        }}
      />

      <Tabs.Screen
        name="qrCode"
        options={{
          title: "QrCode",
          tabBarIcon: () => <Text>📷</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "QrCode", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#C5D096" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#C5D096",
        }}
      />

      <Tabs.Screen
        name="addProduct"
        options={{
          title: "New restaurant",
          tabBarIcon: () => <Text>➕</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "New product", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#C5D096" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#C5D096",
        }}
      />
    </Tabs>
  );
}
