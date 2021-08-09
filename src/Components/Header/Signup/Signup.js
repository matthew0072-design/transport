import { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import * as Yup from "yup";

const Signup = () => {
  const validationSchema = Yup.object().shape({
    surname: Yup.string().required("surname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Great");
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography
            variant="h6"
            align="center"
            margin="dense"
            color="primary"
          >
            Register
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Controller
                defaultValue=""
                name="surname"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    id="surname"
                    value={value}
                    onChange={onChange}
                    label="Full Name"
                    fullWidth
                    margin="dense"
                  />
                )}
                error={errors.surname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.surname?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                defaultValue=""
                rules={{ required: true }}
                name="username"
                render={({ field }) => (
                  <TextField
                    id="username"
                    label="Username"
                    fullWidth
                    margin="dense"
                    {...field}
                  />
                )}
                error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                defaultValue=""
                name="email"
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    margin="dense"
                  />
                )}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="dense"
                  />
                )}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="confirmPassword"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="dense"
                  />
                )}
                error={errors.confirmPassword ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.confirmPassword?.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
                        onChange={(e) => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms
                  ? "(" + errors.acceptTerms.message + ")"
                  : ""}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default Signup;
