import { ThemeProvider } from "styled-components";
import { Title } from "@/components/base/title";
import { Container } from "@/components/base/container";
import { Row } from "@/components/base/row";
import { theme } from "@/styles/Theme";
import { GlobalStyles } from "@/styles/Global";
import AddTodo from "@/components/widgets/add-todo";
import Filters from "@/components/widgets/filters";
import Todos from "@/components/widgets/todos";
import Modal from "@/components/widgets/modal";
import { ModalProvider } from "styled-react-modal";
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Modal />
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
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Layout;
