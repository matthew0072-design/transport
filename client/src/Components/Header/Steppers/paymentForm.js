import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useForm, Controller, useFormContext } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Select, FormControl, MenuItem } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        // border: "2px solid yellow",
    },

    paper: {
        width: 900,
        padding: theme.spacing(1),
    },

    textField: {
        width: 300,
        height: "2.5rem",
    },

    boxPay: {
        position: "relative",
        left: "15rem",
        backgroundColor: "tomato",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: "white",
        width: 150,
        outline: "none",
        border: "none",

        padding: theme.spacing(1),
        "&:hover": {
            backgroundColor: "magenta",
        },
    },
}));

const PaymentForm = () => {
    const { control, handleSubmit } = useForm();
    const classes = useStyles();

    const years = ["2015", "2018", "2019", "2020", "2021", "2022"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

   

     
  

    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.paper}>
                <Box>
                    <Typography variant="h4" color="primary" align="center">
                        {" "}
                        Payment
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="darkgray" align="center">
                        Pay with Credit Card
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    <Box mt={1} height={40}>
                        <Grid item xs={12} sm={6}>
                            {" "}
                            <Controller
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                name="otherNames"
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        id="otherNames"
                                        placeholder="Your Card Number"
                                        margin="dense"
                                        className={classes.textField}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                    </Box>
                    <Box mt={1} height={40} ml={5} clone>
                        <Grid item xs={12} sm={6}>
                            {" "}
                            <Controller
                                control={control}
                                name="expire"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        variant="outlined"
                                        className={classes.textField}
                                    >
                                        {months.map((month, index) => (
                                            <MenuItem key={index} value={month}>
                                                {month}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </Grid>
                    </Box>
                    <Box mt={3} height={40}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                control={control}
                                name="year"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        variant="outlined"
                                        className={classes.textField}
                                    >
                                        {years.map((year, index) => (
                                            <MenuItem key={index} value={year}>
                                                {year}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </Grid>
                    </Box>
                    <Box mt={2} ml={6} height={40}>
                        <Grid item xs={12} sm={6}>
                            {" "}
                            <Controller
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                name="cvv"
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        id="cvv"
                                        placeholder="CVV"
                                        margin="dense"
                                        className={classes.textField}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                    </Box>
                </Grid>
                <Box className={classes.boxPay} clone>
                    <Button component={Link} to="/" variant="outlined">
                        {" "}
                        <Typography> Pay Now </Typography>
                    </Button>

                
                </Box>
            </Paper>
        </div>
    );
};
export default PaymentForm;
