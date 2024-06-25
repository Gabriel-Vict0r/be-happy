import styled from "styled-components/native";

export const BtnNext = styled.Pressable`
  background-color: ${(props) => props.theme.colors["bg-btn-map"]};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.blue};
`;
