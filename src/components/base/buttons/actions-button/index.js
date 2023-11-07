import styled from "styled-components";

export const ActionButton = styled.button`
  background-color: ${({ name, theme, completed }) =>
    name === "check"
      ? completed
        ? theme.colors.third
        : theme.colors.secondary
      : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
`;
