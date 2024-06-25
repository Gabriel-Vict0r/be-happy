import styled from "styled-components/native";

export const SubTComponent = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  color: ${(props) => props.theme.colors.text};
  width: 70%;
  font-size: 20px;
`;
