import Typography from "@material-ui/core/Typography";
import HomeFooter from "../HomeBook/HomeFooter";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    background: "lightgrey",
  },
  about: {
    color: "white",
    background: "darkgray",
    fontWeight: "bolder",
    width: "100%",
    height: "5rem",
    marginTop: theme.spacing(11),
    textAlign: "center",
  },

  who: {
    width: "100%",
    height: "10rem",
    textAlign: "center",
    background: "ghostwhite",
  },

  typoWho: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
  },

  lmts: {
    color: "slategrey",
    textAlign: "center",
    background: "ghostwhite",
    width: "100%",
    height: "15rem",
  },

  mission: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "linear-gradient(to right, coral, darkslateblue)",
    height: "20rem",
    width: "100%",
  },

  flexMission: {
    border: "1px solid white",
    color: "white",
    padding: theme.spacing(5),
    textAlign: "center",
    width: 400,
    height: 100,
  },

  belief: {
    width: "100%",
    height: 350,
    color: "slategrey",
    textAlign: "center",
    padding: theme.spacing(10),
  },
}));

export default function Aboutus() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.about}>
        <Typography variant="h3"> About us </Typography>
      </div>
      <div className={classes.who}>
        <Typography variant="h2" color="black" className={classes.typoWho}>
          {" "}
          Who We Are
        </Typography>
      </div>
      <div className={classes.lmts}>
        <Typography variant="h6">
          LMTS is a Trusted Name in Transportation for 20 Years and counting.
          PMT provides transportation <br />
          services for intercity/interstate travelers in Nigeria. PMT customers
          can enjoy air conditioned vehicles <br />
          and light entertainment. Peace Mass Transit Ltd offers you the unique
          service to hire a bus that will <br />
          take you to anywhere in Nigeria, following your desired journey plan,
          schedule and duration at a very affordable price. <br />
          LMTS also provides haulage services for businesses and individuals
          looking to <br />
          transport large goods and services or materials within and around
          Nigerian cities.
        </Typography>
      </div>
      <div className={classes.mission}>
        <div className={classes.flexMission}>
          <Typography variant="h4"> Our Mission</Typography>
          <Typography variant="body1">
            "Our mission is to provide an affordable and reliable transport
            system for our People."
          </Typography>
        </div>
        <div className={classes.flexMission}>
          <Typography variant="h4">Our Vision</Typography>
          <Typography variant="body1" color="initial">
            "Our Vision is to use all available resources to become the largest
            and most efficient road transport corporation world over."
          </Typography>
        </div>
      </div>
      <div className={classes.belief}>
        <Typography variant="h4" color="initial">
          Our Belief @ LMTS
        </Typography>
        <Typography variant="h6" color="initial">
          Hence, our belief is that our growth from two buses to two thousand
          buses in fourteen years without <br />
          any outside help is made possible by God who for His own reasons chose
          to use us for this miracle. <br />
          We are the David of our time. Peace Group has combined staff strength
          of 2,750. Our presence is in <br /> about 19 states, thus, Our
          ebullient and astute Chairman, Chief Samuel Maduka Onyishi, was
          recently <br /> decorated with the award of Member of Order of the
          Niger (MON) by the President and CIC of the <br />
          Federal Republic of Nigeria which in our opinion, is in recognition of
          the positive impact of our <br />
          company in the economic growth of our country. <br /> To God be the
          Glory Peace Group Nigeria started from a humble beginning back in 1994
          with two <br /> Hiace buses. Commenced business as a Transport
          company, Peace Mass Transit Company which has <br /> now transformed
          to be one of Nigeria??s leading Transport Service Company, conveying
          about 30,000 passengers daily.
        </Typography>
      </div>
      <HomeFooter />
    </div>
  );
}
