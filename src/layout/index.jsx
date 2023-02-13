import AddTodo from "../components/add-todo";
import Filters from "../components/filters";
import Todos from "../components/todos";
const Layout = () => {
  return (
    <>
      <h1>Tasks</h1>
      <div className="container">
        <div className="row">
          <AddTodo />
          <Filters />
        </div>
        <div className="row">
          <Todos />
        </div>
      </div>
    </>
  );
};

export default Layout;
