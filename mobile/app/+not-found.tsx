import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function sNotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This tab doesn't exists</Text>
    </>
  );
}
