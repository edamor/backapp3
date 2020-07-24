import React, { useState, useCallback } from 'react';
import { Route, useHistory } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



export default function NewRequestRoute({setRequests}) {
   const token = localStorage.getItem('token');
   const user = JSON.parse(localStorage.getItem('user'));

   const history = useHistory();

   let [loader, setLoader] = useState(false);

   const service = ['Basic Housekeeping'];
   const [date, setDate] = useState(new Date().getTime() + 86400000);
   const [address, setAddress] = useState("");
   
   const handleDateChange = useCallback((e) => {
      e.setHours(0, 0, 0, 0);
      let chosenDate = new Date(e).getTime() + 32400000;
      console.log(e);
      console.log(new Date(chosenDate));

      setDate(new Date(chosenDate).getTime())
   },[]) 

   const handleAddressChange = useCallback((e) => {
      setAddress(e)
   },[]) 




   const submitRequest = async () => {
      setLoader(true);
      let newRequest = {service: service[0], appointmentDate: date, appointmentLocation: address};
      const URL = `https://young-anchorage-59812.herokuapp.com/auth/users/${user.userId}`;
      let response;

      try {
         response = await fetch(URL, {
            method: 'post',
            headers: {
               'Content-type': 'application/json',
               'x-auth-token': token
            },
            body: JSON.stringify(newRequest)
         })
      } catch(e) {
         console.log(e);
         alert('Please check your internet connection');
         setLoader(false);
      }

      if (response !== undefined) {
         if (response.ok) {
            let data = await response.json();
            setRequests(data);
            setLoader(false);
            history.push('/personal/requests')
         } else {
            alert(`HTTP Error: ${response.status}`);
            setLoader(false);
         } 
      }
   }

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Route render={() => {
            if (!loader) {
               return (
                  <BookingForm 
                     service={service}
                     date={date}
                     handleDateChange={handleDateChange}
                     address={address}
                     handleAddressChange={handleAddressChange}
                     handleSubmit={submitRequest}
                  />
               )
            } else return <div className="page-loader" ></div>
         }}/>
      </MuiPickersUtilsProvider>
   )
}