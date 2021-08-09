import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./Components/Header/Header";
import HomeBook from "./Components/HomeBook/HomeBook";
import HomeInfo from "./Components/HomeBook/HomeInfo";
import HomeVerify from "./Components/HomeBook/homeVerify";
import HomeFooter from "./Components/HomeBook/HomeFooter";
import { Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FF7F50",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HomeBook />
        <HomeInfo />
        <HomeVerify />
        <HomeFooter />
      </div>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
