import { Image, StyleSheet, Platform, View, Text } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen() {
  const Component = styled.Text`
    color: ${(props) => props.theme.colors.yellow};
  `;
  return (
    <View className="flex items-center w-full h-full pt-80 bg-border-green">
      <View className="">
        <Component>Texto</Component>
      </View>
      <Text className="text-base text-red-box">Texto</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
// });
