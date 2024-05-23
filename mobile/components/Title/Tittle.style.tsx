import styled from "styled-components/native";

export const TittleComponent = styled.Text`
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: ${(props) => props.theme.colors["dark-blue"]};
  line-height: 55px;
  font-size: 48px;
  width: 70%;
`;
