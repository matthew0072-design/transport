import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  buttonItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
  },
  defaultColor: {
    color: "white",
    fontWeight: "light",
  },
}));

const About = () => {
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
        <DriveEtaOutlinedIcon />
        ABOUT
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button> About us </Button>
            <Button> FAQ </Button>
          </div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default About;
