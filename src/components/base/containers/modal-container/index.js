import Modal from "styled-react-modal";

export const ModalContainer = Modal.styled`
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  gap:20px;
  background-color:${({ theme }) => theme.colors.white};
`;
