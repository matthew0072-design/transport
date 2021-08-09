import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    width: 800,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    width: 300,
    border: "1px solid blue",
  },
  selectControl: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const RouteForm = () => {
  const classes = useStyles();
  const { control } = useForm();
  const [route, setRoute] = useState(null);

  return (
    <Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <div className={classes.selectControl}>
          <div>
            <Typography variant="h6" color="primary">
              {" "}
              From
            </Typography>
            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
            <Controller
              name="route"
              control={control}
              render={(field) => (
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  value={route}
                  {...field}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="under G" selected={true}>
                    Under G
                  </MenuItem>
                  <MenuItem value="Adenike">Adenike</MenuItem>
                  <MenuItem value="Stadium">Stadium</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              )}
            />
          </div>
          <div>
            <Typography variant="h6" color="primary">
              {" "}
              To
            </Typography>
            <Controller
              name="dest"
              control={control}
              render={({ field }) => (
                <Select
                  value={route}
                  label="route"
                  {...field}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Fag">FAG</MenuItem>
                  <MenuItem value="Manage">Management</MenuItem>
                  <MenuItem value="software">Software Institute</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              )}
            />
          </div>
        </div>
      </FormControl>
    </Fragment>
  );
};

export default RouteForm;
