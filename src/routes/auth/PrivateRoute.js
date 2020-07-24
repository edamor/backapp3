import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({ children, ...rest }) {
   let isAuthorized = localStorage.getItem("token") ? true : false;


   
   return (
      <React.Fragment>
         <Route
            {...rest}
            render={({ location }) =>
               (isAuthorized) ? (
                  children
               ) : (
                     <Redirect
                        to={{
                           pathname: "/login",
                           state: { from: location }
                        }}
                     />
                  )
            }
         />
      </React.Fragment>
   )
}