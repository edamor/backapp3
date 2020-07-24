import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MyRequests from '../../components/MyRequests/MyRequests';
import NewRequestRoute from '../new-request/NewRequestRoute';


const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
   },
   fixedHeight: {
      height: 240,
   },
}));


export default function PersonalRoute({handleBadgeCount}) {
   const classes = useStyles();
   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   
   const [myRequests, setMyRequests] = React.useState([{id: 1, upcoming: "none"}]);
   
   
   
   React.useEffect(() => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      const fetchData = async () => {
         let URL = `https://young-anchorage-59812.herokuapp.com/auth/users/${user.userId}/appointments`;
         let response;

         try {
            response = await fetch(URL, {
               method: 'get',
               headers: {
                  'x-auth-token': token
               }
            })
         } catch (e) {
            console.log(e);
            alert('Please check your internet connection');
         }

         if (response !== undefined) {
            if (!response.ok) {
               console.log("response status: " + response.status);
               throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            if (data.length > 0) {
               handleBadgeCount(data.length);
               setMyRequests(data);
            } 
         }
      }
      fetchData();
   }, [handleBadgeCount]);

   const setRequests = (newRequest) => {
      if (myRequests[0].id === 1) {
         setMyRequests(newRequest)
      } else {
         setMyRequests([newRequest, ...myRequests]);
         handleBadgeCount(myRequests.length + 1)
      } 
   };

   myRequests.sort((a, b) => (b.createdAt - a.createdAt));


   
   
   let showUpcoming = () => {
      let upcoming = myRequests[myRequests.length - 1];
      if (upcoming.id === 1) {
         return (
            <div><p>No Upcoming Booking</p></div>
         )
      } else return (
         <div>
            <p>{upcoming.service}</p>
            <p>
               {
                  `
                  ${months[new Date(upcoming.appointmentDate).getMonth()]} ${new Date(upcoming.appointmentDate).getDate()},
                   ${days[new Date(upcoming.appointmentDate).getDay()]} ${new Date(upcoming.appointmentDate).getHours()}:00AM
                  `
               }
            </p>
            <p>{upcoming.appointmentLocation}</p>
         </div>
      ) 
   }

   return (
      <Switch>
         <Route exact path="/personal/" render={() => (
            <Grid container spacing={3}>
               <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                     <div>
                        <h1>
                           My Dashboard
                        </h1>
                        <p>
                           Welcome to BackApp! We provide a platform that aims to connect 
                           people seeking a backup and people willing to be the backup.
                        </p>
                        <p>
                           Today, it's so easy to get caught up in things that 
                           requires our time and focus. How can we juggle our responsibilities and make 
                           sure that the place that we call home is clean and well maintained? 
                           We need someone to be our backup, who will take care of our housekeeping duties 
                           for us, hence the name BackApp.
                        </p>
                     </div>
                  </Paper>
               </Grid>
               <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                     <div>
                        <h1>
                           Upcoming
                        </h1>
                        {showUpcoming()}
                     </div>
                  </Paper>
               </Grid>
            </Grid>
         )} />
         
         <Route path="/personal/requests" render={() => <MyRequests data={myRequests} />} />

         <NewRequestRoute path="/personal/new" setRequests={setRequests} />

      </Switch>
   )
}