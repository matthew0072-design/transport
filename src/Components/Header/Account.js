import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link as RouterLink, Switch, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Signup/login";

const useStyles = makeStyles((theme) => ({
  buttonItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
  },
  defaultColor: {
    color: "white",
    fontWeight: "light",
    backgroundColor: "tomato",
    borderRadius: "3rem",
  },
}));

const Account = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        onClick={onOpen}
        aria-controls="customized-menu"
        aria-haspopup="true"
        className={classes.defaultColor}
      >
        <AccountCircleOutlinedIcon />
        ACCOUNT
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button component={RouterLink} to="/register">
              {" "}
              Register{" "}
            </Button>
            <Button component={RouterLink} to="/login">
              {" "}
              Login{" "}
            </Button>
          </div>
        </MenuItem>
      </Menu>
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default Account;
