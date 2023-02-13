import styled from "styled-components";
export const TodoItem = styled.div`
  display: grid;
  grid-template-columns: 7fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
`;

export const TodoTitle = styled.span`
  grid-area: 1;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 10px 1px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
`;
