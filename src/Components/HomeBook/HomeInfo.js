import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Image from "../../assets/images.jpg";
import Image2 from "../../assets/ddd.jpg";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "ghostwhite",
  },
  cardRoot: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3rem",
  },
  card: {
    width: "20rem",
    height: "30rem",
  },
  cardAction: {
    margin: "auto",
    color: "white",
    background: "primary",
  },

  media: {
    height: "15rem",
    objectFit: "cover",
  },
}));

const HomeInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3"> What we do</Typography>

      <div className={classes.cardRoot}>
        <div className={classes.oneCard}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Image}
              title="logistics-bike"
            />
            <CardHeader title="PMT - Logistics" />
            <CardContent>
              <Typography variant="h6">
                Send your packages or parcels here.
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardAction}
              >
                Send your goods
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className={classes.twoCard}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Image2}
              title="logistics-bike"
            />
            <CardHeader title="PMT - Transport" />
            <CardContent>
              <Typography variant="h6">
                Book and create reservation for your travel here.
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardAction}
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
