import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Signup from "./Components/Header/Signup/Signup";
import Login from "./Components/Header/Signup/Login";
import Aboutus from "./Components/About/Aboutus";
import Privacy from "./Components/Footer/Privacy";
import Terms from "./Components/Footer/Terms";
import Faq from "./Components/About/Faq";
import UserDriver from "./Components/Header/Signup/userDriver";
import DriverSignUp from "./Components/Header/Signup/Driver";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPhone,
  faUser,
  faEnvelope,
  faKey,
  faUserPlus,
  faKeyboard,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPhone,
  faUser,
  faKey,
  faEnvelope,
  faUserPlus,
  faKeyboard,
  faListUl
);

function App() {
  const theme = createTheme({
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
      <BrowserRouter>
        <Switch>
          <Route path="/register-user" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/user-driver" component={UserDriver} />
          <Route path="/register-driver" component={DriverSignUp} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/about" component={Aboutus} />
          <Route path="/faq" component={Faq} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
