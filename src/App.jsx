import TodosProvider from "./context/todo-context";
import Layout from "./layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <TodosProvider>
      <Layout />;
      <ToastContainer />
    </TodosProvider>
  );
};

export default App;
