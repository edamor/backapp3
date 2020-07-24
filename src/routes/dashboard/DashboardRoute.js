import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';


export default function DashboardRoute() {

   return (
      <Route path="/" >
         <Dashboard />
      </Route>
   )
}