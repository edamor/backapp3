import React from 'react';
import SignUp from '../../components/SignUp/SignUp';


export default function RegisterRoute() { 

   const REGISTER_URL = "https://young-anchorage-59812.herokuapp.com/register/";

   return (
      <React.Fragment>
         <SignUp REGISTER_URL={REGISTER_URL} />
      </React.Fragment>
   )
}