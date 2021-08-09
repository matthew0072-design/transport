import { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { Controller, useForm } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitHandler = () => {
    console.log("login successfully");
  };

  return (
    <Fragment>
      <Paper elevation={3}>
        <Typography variant="h5" color="primary">
          Login
        </Typography>
        <Grid container direction="column" justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  variant="contained"
                  {...field}
                  id="email"
                  type="email"
                  label="Email..."
                />
              )}
            />
            {errors.email && "Email is required"}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  variant="contained"
                  id="password"
                  label="password"
                  {...field}
                  type="password"
                  placeholder="Your password"
                />
              )}
            />
            {errors.password && "password is required"}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmitHandler())}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Login;
