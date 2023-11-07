import styled from "styled-components";

export const TodoTitle = styled.span`
  grid-area: 1;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 10px 1px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;