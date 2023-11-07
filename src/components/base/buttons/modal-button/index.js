import styled from "styled-components";

export const ModalButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  margin-right: 1rem;
`;
