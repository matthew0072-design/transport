import React from "react";
import Typography from "@material-ui/core/Typography";
import { Controller, useForm } from "react-hook-form";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Contact() {
  const { control, register, handleSubmit } = useForm();

  const options = [
    {
      value: "sug",
      label: "Suggestion",
    },

    {
      value: "enq",
      label: "Enquiry",
    },

    {
      value: "comp",
      label: "Complaint",
    },
  ];

  const onSubmitHandler = () => {
    console.log("submitted");
  };

  return (
    <div>
      <Typography variant="h1" color="secondary">
        Send Us a Message
      </Typography>
      <Typography variant="h4" color="primary">
        You can contact us with anything related to our Products. We'll get in
        touch with you as soon as possible.
      </Typography>
      <div>
        <Paper elevation={3}>
          <Box px={3} py={2}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={12}>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      id="name"
                      label="Your name"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} ms={6}>
                <Controller
                  control={control}
                  name="email"
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Email"
                      id="email"
                      type="email"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} ms={6}>
                <Controller
                  control={control}
                  name="number"
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ value, onChange }) => (
                    <TextField
                      id="number"
                      label="Your number"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  control={control}
                  name="subject"
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ value, onChange }) => (
                    <TextField
                      id="subject"
                      label="Subject"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} ms={6}>
                <TextField
                  id="type"
                  label="Type"
                  select
                  {...register("type", { required: true })}
                >
                  {options.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                />
              </Grid>
              <Grid item xs={12} ms={6}>
                <Controller
                  control={control}
                  defaultValue=""
                  name="message"
                  render={({ field }) => (
                    <TextField
                      id="message"
                      label="Message"
                      {...field}
                      Multiline
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmitHandler())}
              >
                Contact us
              </Button>
            </Box>
          </Box>
        </Paper>
      </div>
      <div>
        <Box>
          <Typography variant="h4" color="secondary">
            Find us at the office
          </Typography>
          <Typography variant="body1" color="secondary">
            Room No 8-12 Lautech Senate building, Ogbomoso, Oyo State, Nigeria.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color="secondary">
            {" "}
            Give us a ring
          </Typography>
          <Typography variant="body1" color="secondary">
            Customare Care: +2347007322362 Enquiry: +2348055492865 Complaint:
            +2348055091806 Monday - Sunday 8:00AM - 10:00PM
          </Typography>
        </Box>
      </div>
    </div>
  );
}
