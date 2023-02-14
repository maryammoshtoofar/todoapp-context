import styled from "styled-components";
import Modal from "styled-react-modal";
export const StyledModal = Modal.styled`
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  gap:20px;
  background-color:${({ theme }) => theme.colors.white};
`;
export const ModalButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  margin-right: 1rem;
`;

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
`;
