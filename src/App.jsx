import TodosProvider from "./context/todo-context";
import Layout from "./layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "./context/modal-context";

const App = () => {
  return (
    <TodosProvider>
      <ModalProvider>
        <Layout />;
        <ToastContainer />
      </ModalProvider>
    </TodosProvider>
  );
};

export default App;
