import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
   seeMore: {
      marginTop: theme.spacing(3),
   },
   textCenter: {
      textAlign: 'center'
   },
   wOutData: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
   }
}));

export default function MyRequests({ data }) {
   const classes = useStyles();
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let showRecent = () => {
      if (data[0].id === 1) {
         return (
            <TableRow key={data[0].id}>
               <TableCell align="center" colSpan={4} className={classes.wOutData}>
                  You haven't made a request yet. <Link to="/personal/new">Click here to make your first request.</Link>
               </TableCell>
            </TableRow>
         )
      }
      if (data !== undefined) {
         return data.map((item) => {
            return (
               <TableRow key={item.id}>
                  <TableCell>
                     {
                        `
                           ${months[new Date(item.createdAt).getMonth()]} ${new Date(item.createdAt).getDate()}
                        `
                     }
                  </TableCell>
                  <TableCell>{item.service}</TableCell>
                  <TableCell className={classes.textCenter}>{item.accepted ? "Booked" : "Pending"}</TableCell>
                  <TableCell className={classes.textCenter}>
                     {
                        `${months[new Date(item.appointmentDate).getMonth()]} ${new Date(item.appointmentDate).getDate()},
                         ${days[new Date(item.appointmentDate).getDay()]} ${new Date(item.appointmentDate).getHours()}:00AM
                        `
                     }
                  </TableCell>
                  <TableCell className={classes.textCenter}>{item.appointmentLocation}</TableCell>
               </TableRow>
            )
         })
      }
   }

   console.log(data)


   return (
      <React.Fragment>
         <Grid container spacing={2} justify="center">
            <Typography component="h1" variant="h4" >
               Requests
            </Typography>
         </Grid>
         <Table size="small" className={classes.seeMore} >
            <TableHead>
               <TableRow>
                  <TableCell>Placed On</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell className={classes.textCenter}>Status</TableCell>
                  <TableCell className={classes.textCenter}>Date</TableCell>
                  <TableCell className={classes.textCenter}>Location</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {showRecent()}
            </TableBody>
         </Table>
      </React.Fragment>
   );
}
