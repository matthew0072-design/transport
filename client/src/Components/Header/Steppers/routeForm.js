import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import Select from "@material-ui/core/Select";
import { useForm, Controller } from "react-hook-form";
import { PaystackButton } from 'react-paystack';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 700,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    width: 300,
  },
  selectControl: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const RouteForm = () => {
  
  const PUBLIC_KEY = "pk_test_86c6d47772a9557bd9bee8b2347935b9a889458c";
  const AMOUNT = 100000;

  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();
  


  const config = {
    reference: (new Date()).getTime().toString(),
    email: "faggymatt007@gmail.com",
    amount:AMOUNT,
    publicKey:PUBLIC_KEY,
  };


  const handlePaystackSuccessAction = (reference) => {
        
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    
    console.log('closed')
  }


  const componentProps = {
    ...config,
    text: 'Pay Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};

const onSubmitHandler = (data) => {
  console.log(data)
  axios.post("http://localhost:5000/booking", data)
  .then(response => {console.log("successful")
  location.assign("/")    
})
  .catch(error => console.log(error))
  

}



  return (
  <div>
      <Grid container spacing={1}>
    
        <Grid item xs={12} sm={6}>
        <Box>
            <Typography variant="h6" color="primary">
              {" "}
              From
            </Typography> 

            <Controller
              control={control}
              name="from"
              defaultValue=""
              rules={{ required: true }}
              render={({field}) => (
                <Select
                  size="small"
                  {...field}
                  className={classes.selectEmpty}
                > 
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Under G">Under G </MenuItem> 
                  <MenuItem value="Adenike"> Adenike </MenuItem>
                  <MenuItem value="Stadium">Stadium </MenuItem>
                  <MenuItem value="Others">Others </MenuItem>
                </Select>
              )}
            />
          </Box>
        </Grid>
      <Grid item xs={12} sm={6}>
      <Box>
            <Typography variant="h6" color="primary">
              {" "}
              To
            </Typography>

            <Controller
              name="to"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="FAG">FAG</MenuItem>
                  <MenuItem value="Management">Management</MenuItem>
                  <MenuItem value="Software Institute">Software Institute</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              )}
            />
          </Box>
        </Grid>
        </Grid>
        <Box   sx={{
        mt:5,
        ml: 35,
        bgcolor: 'tomato',
        color: "white",
        align: "center",
        '&:hover': {
          backgroundColor: 'red',
          opacity: [0.9, 0.8, 0.7],
        },
      }} clone >
                <Button
                  variant="contained"
                  align="center"
                  onClick={handleSubmit(onSubmitHandler)}
                >
                  Submit
                </Button>
                
              </Box>
              
    </div>
  );
};

export default RouteForm;