import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Title, Container, Row } from "./styled";
import { theme } from "../styles/Theme";
import { GlobalStyles } from "../styles/Global";
import AddTodo from "../components/add-todo";
import Filters from "../components/filters";
import Todos from "../components/todos";
import Modal from "../components/modal";
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
