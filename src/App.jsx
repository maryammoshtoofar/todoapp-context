import TodosProvider from "./context/todo-context";
import Layout from "./layout";

const App = () => {
  return (
    <TodosProvider>
      <Layout />;
    </TodosProvider>
  );
};

export default App;
