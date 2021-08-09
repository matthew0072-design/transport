import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DepartureBoardOutlinedIcon from "@material-ui/icons/DepartureBoardOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import SimpleModal from "../Header/Steppers/Modal";

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

const Lmts = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(true);
  const onOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        onClick={onOpen}
        aria-controls="customized-menu"
        aria-haspopup="true"
        className={classes.defaultColor}
      >
        <DepartureBoardOutlinedIcon />
        LMTS
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button onClick={handleOpen}> Booking </Button>
            <Modal open={open} onClose={handleClose}>
              <SimpleModal />
            </Modal>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button> Verify Booking </Button>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button> Terminals </Button>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button> Travel History </Button>
          </div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
export default Lmts;
