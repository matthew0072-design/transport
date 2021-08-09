import Typography from "@material-ui/core/typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LautechImage from "../../assets/e.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    textAlign: "right",
    width: "100%",
    position: "relative",
    display: "flex",
  },

  typo: {
    color: "blue",
    fontSize: "1.5rem",
    textAlign: "right",
    margin: "1.5rem",
    fontWeight: "lighter",
  },
  buttonItem: {
    color: "white",
    backgroundColor: "tomato",
    fontSize: "1.5rem",
    right: "9rem",

    "&:hover": {
      backgroundColor: "blue",
    },
  },
  LogImage: {
    width: "50%",
    height: "20rem",
  },

  realImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  LogDesc: {
    width: "30%",
    height: "100%",
  },
}));

const HomeBook = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.LogImage}>
        <img src={LautechImage} alt="lauPics" className={classes.realImage} />
      </div>

      <div className={classes.logDesc}>
        <Typography variant="h5" className={classes.typo}>
          LAUTECH Transport <span style={{ color: "tomato" }}>Service</span>
        </Typography>
        <Typography variant="h5" className={classes.typo}>
          {" "}
          Making Transportation Fast and Safe
        </Typography>

        <Button variant="contained" className={classes.buttonItem}>
          {" "}
          Book now{" "}
        </Button>
      </div>
    </div>
  );
};

export default HomeBook;
