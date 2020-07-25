import React from 'react';
// import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import clsx from 'clsx';
import { MuiPickersUtilsProvider, DatePicker
 } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   fixedHeight: {
      height: 240,
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      // [theme.breakpoints.down('sm')]: {
      //    width: '100%',
      // },
      // [theme.breakpoints.up('md')]: {
      //    width: '100%',
      // },
      // [theme.breakpoints.up('lg')]: {
      //    width: '80%',
      // },
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
   paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
}));




export default function BookingForm({ service, date, handleDateChange, address, handleAddressChange, handleSubmit, error, setError}) {
   const classes = useStyles();
   // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

   let now = new Date().getTime();
   let minDate = new Date(now + 86400000);
   let maxDate = new Date(now + 1209600000);
   // console.log(minDate)


   return (
      <div className={classes.paper}>
         <Typography component="h1" variant="h4">
            Find a Backup
         </Typography>
         <p>
            Pending requests expire on the day before your chosen date at 11:59PM.
         </p>
         <form className={classes.form} noValidate>
            <Grid container spacing={2} justify="center">
               <Grid item sm={12} md={10} lg={8}>
                  <TextField
                     fullWidth
                     id="service-id"
                     select
                     label="Service"
                     value={service[0]}
                     // defaultValue={service[0].value}
                     onChange={(e) => console.log(e.target.value)}
                     helperText="Please select a service"
                     variant="outlined"
                     SelectProps={{
                        native: true,
                     }}
                  >
                     {service.map((option) => (
                        <option key={option} value={option}>
                           {option}
                        </option>
                     ))}
                  </TextField>
               </Grid>
               <Grid item sm={12} md={10} lg={8}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <DatePicker 
                        fullWidth
                        disablePast={true}
                        inputVariant="outlined"
                        helperText="All requests wll be scheduled at 9:00AM of your chosen date"
                        id="date-picker"
                        label="Date"
                        // dateRangeIcon={DateRangeIcon}
                        minDate={minDate}
                        maxDate={maxDate}
                        value={date}
                        onChange={handleDateChange}  
                     />
                  </MuiPickersUtilsProvider>
               </Grid>
               <Grid item sm={12} md={10} lg={8}>
                  <TextField
                     fullWidth
                     id="outlined-multiline-flexible"
                     helperText="Please provide the location for your request"
                     label="Address"
                     multiline
                     rowsMax={4}
                     value={address}
                     onChange={(e) => handleAddressChange(e.target.value)}
                     variant="outlined"
                     error={error.address}
                     onFocus={() => setError({...error, address: false})}
                  />
               </Grid>
               <Grid item sm={12} md={10} lg={8}>
                  <Button
                     type="button"
                     fullWidth
                     variant="contained"
                     className={classes.submit}
                     onClick={() => handleSubmit()}
                  >
                     Submit
                  </Button>
                  
               </Grid>
            </Grid>
         </form>
      </div>
   )
}



