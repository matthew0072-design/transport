import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/download.jpg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    display: "flex",
  },
  avatar: {
    margin: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  typograph: {
    display: "flex",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "40%",
  },

  lmts: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    marginRight: "5rem",
  },
}));

const HomeFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lmts}>
        <div className={classes.typograph}>
          <div>
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src={Image}
              className={classes.avatar}
            />
          </div>
          <div>
            <Typography
              variant="h6"
              color="primary"
              style={{
                marginTop: "1.5rem",
              }}
            >
              LMTS
            </Typography>
          </div>
        </div>
        <Typography color="secondary">
          Our mission is to provide an affordable and reliable transport system
          for our people, using all available resources efficiently.
        </Typography>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6" color="primary">
          {" "}
          Lmts{" "}
        </Typography>
        <Button color="secondary"> HOME </Button>
        <Button color="secondary">ABOUT US</Button>
        <Button color="secondary">CONTACT US</Button>
        <Button color="secondary">TERMS & CONDITIONS</Button>
        <Button color="secondary">PRIVACY POLICY</Button>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6" color="primary">
          {" "}
          Transport{" "}
        </Typography>
        <Button color="secondary"> BOOKING </Button>
        <Button color="secondary">VERIFY BOOKING</Button>
        <Button color="secondary">TRAVEL HISTORY</Button>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6" color="primary">
          Logistics{" "}
        </Typography>
        <Button color="secondary"> PICK UP </Button>
        <Button color="secondary">TRACKING</Button>
        <Button color="secondary">SHIPMENT</Button>
      </div>
    </div>
  );
};

export default HomeFooter;
