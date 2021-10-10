import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RouteForm  from "./routeForm";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button"



const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid tomato",
    boxShadow: theme.shadows[24],
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
  },
}));

export default function SimpleModal({open, handleClose}) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Fragment>
      
       <Modal  open={open} onClose={handleClose}>
        <div className={classes.paper} >
          <RouteForm />
        </div>
      </Modal> 
      
    </Fragment>
  );
}
