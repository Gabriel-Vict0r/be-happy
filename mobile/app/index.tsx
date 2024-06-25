import { Image, StyleSheet, Platform, View, Text } from "react-native";
import styled from "styled-components/native";
import Onboarding from "react-native-onboarding-swiper";
import Tittle from "@/components/Title/Tittle";
import SubTittle from "@/components/SubTittle/SubTittle";
import ButtonNext from "@/components/Next/ButtonNext";
export default function HomeScreen() {
  const Component = styled.Text`
    color: ${(props) => props.theme.colors.yellow};
  `;
  return (
    <Onboarding
      onSkip={() => null}
      NextButtonComponent={ButtonNext}
      pages={[
        {
          backgroundColor: "#F2F3F5",
          image: (
            <Image
              source={require("../assets/images/onboarding/Ilustra01.png")}
            />
          ),
          title: <Tittle tittle="Leve felicidade para o mundo" />,
          subtitle: (
            <SubTittle subTittle="visite orfanatos e mude o dia de muitas crianças" />
          ),
        },
        {
          backgroundColor: "#F2F3F5",
          image: (
            <Image
              source={require("../assets/images/onboarding/Ilustra02.png")}
            />
          ),
          title: "Escolha um orfanato no mapa e faça uma visita",
          subtitle: "",
        },
      ]}
    />
    // <View className="flex items-center w-full h-full pt-80 bg-border-green">
    //   <View className="">
    //     <Component>Texto</Component>
    //   </View>
    //   <Text className="text-base text-red-box">Texto</Text>
    // </View>
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
