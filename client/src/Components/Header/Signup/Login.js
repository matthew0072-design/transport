import TextField from "@material-ui/core/TextField";
import { Controller, useForm } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Header from "../Header";
import HomeFooter from "../../HomeBook/HomeFooter";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import Image from "../../../assets/download.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100%",
  },

  paperForm: {
    width: 350,
    height: 450,
    padding: theme.spacing(3),
    borderRadius: "5% 5%",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
  },

  boxLogin: {
    display: "flex",
    JustifyContent: "center",
    alignItems: "center",
    width: "100%",
    outline: "none",
    background: "tomato",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bolder",
    borderRadius: "2rem",
    marginTop: theme.spacing(4),
  },
  avatar: {
    margin: "auto",
    height: theme.spacing(17),
    width: theme.spacing(14),
  },

  boxText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
  },
}));

const Login = () => {
  const classes = useStyles();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(`submitted Successfully ${data}`);

    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
        location.assign("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <Header />
      <Paper elevation={5} className={classes.paperForm}>
        <Box>
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={Image}
            className={classes.avatar}
          />
        </Box>
        <Box mt={1} className={classes.boxText} clone>
          <Typography variant="h5" color="primary">
            Login
          </Typography>
        </Box>

        <Grid container direction="column" justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={12}>
            <Box mt={5}>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Email..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon="envelope" size="lg" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />
              {errors?.email?.message}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box mt={5}>
              <Controller
                control={control}
                name="password"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    id="password"
                    placeholder="Password"
                    {...field}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon="key" size="lg" />
                        </InputAdornment>
                      ),
                    }}
                    type="password"
                    placeholder="Your password"
                  />
                )}
              />
              {errors?.password?.message}
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.boxLogin} clone>
          <Button variant="contained" onClick={handleSubmit(onSubmitHandler)}>
            Login
          </Button>
        </Box>
        <Box color="tomato" ml={10} clone>
          <Button component={Link} to="/register" variant="text">
            register instead
          </Button>
        </Box>
      </Paper>
      <HomeFooter />
    </div>
  );
};

export default Login;
