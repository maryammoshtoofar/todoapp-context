import styled from "styled-components";

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 5px;
  top: 5px;
  height: 75%;
  width: 15%;
`;
