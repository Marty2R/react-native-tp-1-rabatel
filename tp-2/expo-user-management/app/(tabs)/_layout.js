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
