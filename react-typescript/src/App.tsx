import { FC } from "react";
import ExpensesProvider from "./contexts/ExpensesContext";
import ModalProvider from "./contexts/ModalContext";
import Layout from "./components/Layout";
import "./styled-components/app.css";

const App: FC = (): JSX.Element => (
  <ModalProvider>
    <ExpensesProvider>
      <Layout />
    </ExpensesProvider>
  </ModalProvider>
);

export default App;
