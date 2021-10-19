import {useState} from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom"
import Geolocation from "./Geolocation"
import { useForm, Controller } from "react-hook-form";
import { PaystackButton } from 'react-paystack';
import axios from "axios"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"

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
  let history = useHistory()

  const PUBLIC_KEY = "pk_test_86c6d47772a9557bd9bee8b2347935b9a889458c";
  const AMOUNT = 100000;
  const [value, setValue] = useState(null)
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
  .then(response => {
    createCookie(response.data.token)
    console.log("successful")
  history.push("/")    
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
            </Box>
            <Box>
                    
                    <Controller
                      control={control}
                      defaultValue=""
                      className={classes.selectControl}
                      name="from"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          variant="outlined"
                          className={classes.selectEmpty}
                          size="small"
                          {...field}
                        >

                          <MenuItem value="underg"> Under G </MenuItem>
                          <MenuItem value="adenike"> Adenike</MenuItem>
                          <MenuItem value="stadium"> Stadium</MenuItem>
                          <MenuItem value="aroje"> Aroje </MenuItem>
                          <MenuItem value="Yoaco"> Yoaco</MenuItem>
                          <MenuItem value="General"> General </MenuItem>
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
            </Box>
            
                    <Controller
                      control={control}
                      defaultValue=""
                      name="to"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          variant="outlined"
                          className={classes.selectEmpty}
                          size="small"
                          
                          {...field}
                        >
                          <MenuItem value="underg"> Under G </MenuItem>
                          <MenuItem value="adenike"> Adenike</MenuItem>
                          <MenuItem value="stadium"> Stadium</MenuItem>
                          <MenuItem value="aroje"> Aroje </MenuItem>
                          <MenuItem value="Yoaco"> Yoaco</MenuItem>
                          <MenuItem value="General"> General </MenuItem>
                        </Select>
                      )}
                    />
                  
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
