import React, { useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';


export default function LoginRoute() {
   const LOGIN_URL = "https://young-anchorage-59812.herokuapp.com/login";
   
   const [loading, setLoading] = useState(false);

   const history = useHistory();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [usernameHelpText, setUsernameHelpText] = useState("");
   const [passwordHelpText, setPasswordHelpText] = useState("");

   const handleUsername = (value) => setUsername(value); 
   const handlePassword = (value) => setPassword(value);

   const handleUsernameBlur = () => {
      setUsernameError(false);
      setUsernameHelpText("");
   }

   const handlePasswordBlur = () => {
      setPasswordError(false);
      setPasswordHelpText("");
   }
   

   function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
         atob(base64)
            .split("")
            .map(function (c) {
               return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
      );
      return JSON.parse(jsonPayload);
   };

   const fetchLogin = async () => {
      let user = {username: username, password: password};
      let response = await fetch(LOGIN_URL, {
         method: 'post',
         headers: {'Content-type': 'application/json'},
         body: JSON.stringify(user)
      })
      if (!response.ok) {
         setLoading(false);
         console.log("response status: " + response.status);
         throw new Error(`HTTP error! status: ${response.status}`);
      } else  {
         setLoading(false)
         return await response.text()
      }
   }

   

   const handleSignIn = (e) => {
      setLoading(true);
      fetchLogin().then((data) => {
         if (data === "Username is invalid") {
            setUsernameHelpText(data);
            setUsernameError(true);
         }
         if (data === "Password is incorrect") {
            setPasswordHelpText(data);
            setPasswordError(true);
         }
         else {
            console.log("data: " + data);
            console.log(parseJwt(data));
            localStorage.setItem("token", data);
            localStorage.setItem("user", JSON.stringify(parseJwt(data)));
            setUsernameHelpText("");
            setUsernameError(false);
            setPasswordHelpText("");
            setPasswordError(false);
            history.replace("/");
         }
      }).catch(e => console.log("error " + e))
   }

   let isAuthorized = localStorage.getItem("token") ? true : false;


   return (
      <React.Fragment>
         <Route
            render={({ location }) =>
               (!isAuthorized) ? (
                  <SignIn
                     onChangeUsername={handleUsername}
                     onChangePassword={handlePassword}
                     onBlurUsername={handleUsernameBlur}
                     onBlurPassword={handlePasswordBlur}
                     uNError={usernameError}
                     pWError={passwordError}
                     uNHelpText={usernameHelpText}
                     pWHelpText={passwordHelpText}
                     handleSignIn={handleSignIn}
                     isLoading={loading}
                  />
               ) : (
                     <Redirect
                        to={{
                           pathname: "/",
                           state: { from: location }
                        }}
                     />
                  )
            }
         />
         
      </React.Fragment>
   )
}