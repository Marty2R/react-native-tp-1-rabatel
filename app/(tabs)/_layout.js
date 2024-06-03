import { Tabs } from "expo-router";
import { Text } from "react-native";
import { Header } from "react-native-elements";

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
              containerStyle={{ backgroundColor: "#D16277" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#D16277",
        }}
      />
      <Tabs.Screen
        name="donation"
        options={{
          title: "Donation",
          tabBarIcon: () => <Text>💶</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Donation", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#D16277" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#D16277",
        }}
      />
      <Tabs.Screen
        name="infos"
        options={{
          title: "Informations",
          tabBarIcon: () => <Text>ℹ️</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Informations", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#D16277" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#D16277",
        }}
      />
      <Tabs.Screen
        name="legal"
        options={{
          title: "Mentions légales",
          tabBarIcon: () => <Text>👩‍⚖️</Text>,
          header: () => (
            <Header
              leftComponent={{
                text: "Mentions légales",
                style: { color: "#FFF" },
              }}
              containerStyle={{ backgroundColor: "#D16277" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#D16277",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <Text>🛠</Text>,
          header: () => (
            <Header
              leftComponent={{ text: "Settings", style: { color: "#FFF" } }}
              containerStyle={{ backgroundColor: "#D16277" }}
            />
          ),
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#D16277",
        }}
      />
    </Tabs>
  );
}
