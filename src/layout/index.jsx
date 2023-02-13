import { ThemeProvider } from "styled-components";
import { Title, Container, Row } from "./styled";
import { theme } from "../styles/Theme";
import { GlobalStyles } from "../styles/Global";
import AddTodo from "../components/add-todo";
import Filters from "../components/filters";
import Todos from "../components/todos";
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Title>Tasks</Title>
        <Row>
          <AddTodo />
          <Filters />
        </Row>
        <Row>
          <Todos />
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
