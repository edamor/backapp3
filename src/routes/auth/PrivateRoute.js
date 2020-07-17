import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({ children, ...rest }) {
   
   return (
      <React.Fragment>
         <Route
            {...rest}
            render={({ location }) =>
               (false) ? (
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