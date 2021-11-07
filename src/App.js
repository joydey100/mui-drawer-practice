import "./App.css";
import Practice from "./Practice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#130f40",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Practice />
    </ThemeProvider>
  );
}

export default App;
