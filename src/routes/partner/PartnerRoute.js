import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
   }
}));


export default function PartnerRoute() {
   const classes = useStyles();
   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

   return (
      <Switch>
         <Route exact path="/partner/" render={() => (
            <Grid container spacing={3}>
               {/* Chart */}
               <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                     <div>
                        <h1>
                           Partner Account!
                      </h1>
                     </div>
                  </Paper>
               </Grid>
               {/* Recent Deposits */}
               <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                     <div>
                        <h1>
                           Hello!
                      </h1>
                     </div>
                  </Paper>
               </Grid>
               {/* Recent Orders */}
               <Grid item xs={12}>
                  <Paper className={classes.paper}>
                     <div>
                        <h1>
                           Hello!
                      </h1>
                     </div>
                  </Paper>
               </Grid>
            </Grid>
         )} />

         <Route path="/partner/requests" render={() => (
            <div>
               <h1>
                  Available Requests
               </h1>
            </div>
         )} />

         <Route path="/partner/accepted" render={() => (
            <div>
               <h1>
                  Accepted Requests
               </h1>
            </div>
         )} />
      </Switch>
   )
}