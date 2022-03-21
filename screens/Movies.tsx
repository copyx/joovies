import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => (
  <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
    <Title>Movies</Title>
  </Btn>
);

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: blue;
`;

export default Movies;
