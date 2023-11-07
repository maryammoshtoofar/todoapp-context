import { useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { TodosContext } from "@/context/todo-context";
import { ModalButton, ModalContainer, ModalText } from "@/components/base";
import { theme } from "@/styles/Theme";
import { DeleteTodoAPI } from "@/api/api";

const Modal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { dispatch } = useContext(TodosContext);
  function toggleModal() {
    setShowModal({ ...showModal, isOpen: !showModal.isOpen });
  }

  const handleDelete = () => {
    DeleteTodoAPI(dispatch, showModal.id);
    toggleModal();
  };
  return (
    <ModalContainer
      isOpen={showModal.isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <ModalText>Delete this task ?</ModalText>
      <div>
        <ModalButton onClick={handleDelete} bg={theme.colors.primary}>
          Yes
        </ModalButton>
        <ModalButton bg={theme.colors.secondary} onClick={toggleModal}>
          No
        </ModalButton>
      </div>
    </ModalContainer>
  );
};

export default Modal;
