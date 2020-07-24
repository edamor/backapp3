import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Badge from '@material-ui/core/Badge';
// import NotificationsIcon from '@material-ui/icons/Notifications';


export default function NavDrawer({account, badgeCount}) {
   const history = useHistory();

   

   const navPersonalHome = () => {
      history.push('/personal/')
   };
   const navPersonalRequests = () => {
      history.push('/personal/requests')
   };
   const navPersonalNew = () => {
      history.push('/personal/new')
   };

   const navPartnerHome = () => {
      history.push('/partner/')
   }
   const navPartnerRequests = () => {
      history.push('/partner/requests')
   }
   const navPartnerAccepted = () => {
      history.push('/partner/accepted')
   }



   const showNav = () => {
      let a = account.toLowerCase();
      if (a === "personal") {
         return (
            <React.Fragment>
               <ListItem button onClick={navPersonalHome}>
                  <ListItemIcon>
                     <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
               </ListItem>
               <ListItem button onClick={navPersonalRequests}>
                  <ListItemIcon>
                     <Badge color="secondary" badgeContent={badgeCount} >
                        <ListIcon />
                     </Badge>
                  </ListItemIcon>
                  <ListItemText primary="My Bookings" />
               </ListItem>
               <ListItem button onClick={navPersonalNew}>
                  <ListItemIcon>
                     <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Book a Cleaner" />
               </ListItem>
            </React.Fragment>
         )
      } 
      if (a === "partner") {
         return (
            <React.Fragment>
               <ListItem button onClick={navPartnerHome}>
                  <ListItemIcon>
                     <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
               </ListItem>
               <ListItem button onClick={navPartnerRequests}>
                  <ListItemIcon>
                     <Badge color="secondary" badgeContent={badgeCount} >
                        <AllInboxIcon />
                     </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Available Requests" />
               </ListItem>
               <ListItem button onClick={navPartnerAccepted}>
                  <ListItemIcon>
                     <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Accepted Requests" />
               </ListItem>
            </React.Fragment>
         )
      } 
   }

   return (
      <List>
         {showNav()}
      </List>
   )
}