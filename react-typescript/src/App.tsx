import { FC } from "react";
import { ThemeProvider } from "styled-components";
import ExpensesProvider from "./contexts/ExpensesContext";
import ThemeContextProvider, { useThemeContext } from "./contexts/ThemeContext";
import ModalProvider from "./contexts/ModalContext";
import Layout from "./components/Layout";
import theme from "./styled-components/theme";
import GlobalStyles from "./styled-components/App.styles";

const StyledApp = () => {
  const { theme: contextTheme } = useThemeContext();

  const currentTheme = contextTheme ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ModalProvider>
        <ExpensesProvider>
          <Layout />
        </ExpensesProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

const App: FC = (): JSX.Element => (
  <ThemeContextProvider>
    <StyledApp />
  </ThemeContextProvider>
);

export default App;
