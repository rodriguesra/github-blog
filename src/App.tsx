import { ThemeProvider } from "styled-components";
import Blog from "./pages/Blog";
import GlobalStyles from "./styles/global";
import { defaultTheme } from "./styles/themes/default.ts";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Blog />
    </ThemeProvider>
  );
};
export default App;
