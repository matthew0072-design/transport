import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logistics from "./Logistics";
import Account from "./Account";
import Lmts from "./Lmts";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Avatar from "@material-ui/core/Avatar";
import Image from "../../assets/download.jpg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#423E92",
    width: "100%",
    flexGrow: 1,
  },
  avatar: {
    display: "flex",

    margin: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: "flex",
  },

  buttonItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  defaultColor: {
    color: "white",
    fontWeight: "lighter",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Avatar
            variant="square"
            alt="Remy Sharp"
            src={Image}
            className={classes.avatar}
          />
          <Typography variant="h6" className={classes.title} color="secondary">
            LMTS
          </Typography>
          <Button className={classes.defaultColor} component={Link} to="/">
            <HomeOutlinedIcon /> HOME{" "}
          </Button>
          <Lmts />
          <Logistics />
          <About />
          <Button
            className={classes.defaultColor}
            component={Link}
            to="/contact"
          >
            <ContactMailOutlinedIcon /> CONTACT US
          </Button>
          <Account />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
