import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp';


export default function RegisterRoute() { 
   const REGISTER_URL = "https://young-anchorage-59812.herokuapp.com/register/";
   
   const history = useHistory();

   const userTypes = [
      { id: 1, label: "Personal" },
      { id: 2, label: "Partner" }
   ];

   const [userError, setUserError] = useState(false);
   const [passWError, setPassWError] = useState(false);
   const [confirmPwError, setConfirmPwError] = useState(false);
   const [usernameExists, setUsernameExists] = useState(false);

   const [username, setUsername] = useState("");
   const [userType, setUserType] = useState("Personal");
   const [password, setPassword] = useState("");
   const [confirmPw, setConfirmPw] = useState("");

   const errorMsgs = [
      "Username be at least 4 characters",
      "Field cannot be left blank",
      "Password must be at least 8 characters",
      "Passwords don't match",
      "Username is already taken"
   ];
   
   const onChangeUsername = useCallback((e) => { 
      setUsername(e);
      fetchUsername(e);
   }, []);
   const onChangeUserType = useCallback((e) => { setUserType(e) }, []);
   const onChangePassword = useCallback((e) => { setPassword(e) }, []);
   const onChangeConfirmPw = useCallback((e) => { setConfirmPw(e) }, []);

   const [userHelpText, setUserHelpText] = useState("");
   const [passwordHelpText, setPasswordHelpText] = useState("");
   const [confirmPwHelpText, setConfirmPwHelpText] = useState("");

   const onBlurUsername = useCallback(() => {
      if (username === "") {
         setUserError(true);
         setUserHelpText(errorMsgs[1]);
      } else if (usernameExists) {
         setUserError(true);
         setUserHelpText(errorMsgs[4]);
      } else if (username.length < 4) {
         setUserError(true);
         setUserHelpText(errorMsgs[0]);
      }  else {
         setUserError(false);
         setUserHelpText("");
      }
   }, [errorMsgs,username,usernameExists])

   const onBlurPassword = useCallback(() => {
      if (password === "") {
         setPassWError(true);
         setPasswordHelpText(errorMsgs[1]);
      } else if (password.length < 8) {
         setPassWError(true);
         setPasswordHelpText(errorMsgs[2]);
      } else if (confirmPw !== "" && password !== confirmPw) {
         setPassWError(true);
         setConfirmPwError(true);
         setPasswordHelpText(errorMsgs[3]);
         setConfirmPwHelpText(errorMsgs[3]);
      } else {
         setPassWError(false);
         setConfirmPwError(false);
         setPasswordHelpText("");
      }
   }, [errorMsgs, password, confirmPw])

   const onBlurConfirmPw = useCallback(() => {
      if (confirmPw !== password) {
         setConfirmPwError(true);
         setPassWError(true);
         setConfirmPwHelpText(errorMsgs[3]);
         setPasswordHelpText(errorMsgs[3]);
      } else if (confirmPw === "") {
         setConfirmPwError(true);
         setConfirmPwHelpText(errorMsgs[1]);
      } else {
         setConfirmPwError(false);
         setPassWError(false);
         setConfirmPwHelpText("");
      }
   }, [errorMsgs, confirmPw, password])

   const onFocusPw = () => {
      if (passWError && confirmPwError) {
         setPasswordHelpText("");
         setConfirmPwHelpText("");
      }
   };

   async function fetchUsername(e) {
      let URL = REGISTER_URL + e;
      let response = await fetch(URL);
      let data = await response.text();

      if (data === "true") {
         setUsernameExists(true)
      }
      if (data === "false") {
         setUsernameExists(false)
      }
   }

   const fetchRegister = async () => {
      let user = { username: username, password: password };
      let account = userType.toLowerCase();
      let URL = REGISTER_URL + account;
      let response = await fetch(URL, {
         method: 'post',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify(user)
      });
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      } else return await response.json()
   }

   const handleSignUp = () => {
      if (username === "" || password === "" || confirmPw === "") {
         onBlurUsername();
         onBlurPassword();
         onBlurConfirmPw();
      } 
      if (userHelpText !== "" || passwordHelpText !== "" || confirmPwHelpText !== "") {
         onBlurUsername();
         onBlurPassword();
         onBlurConfirmPw();
      }
      if (userError || passWError || confirmPwError) {
         onBlurUsername();
         onBlurPassword();
         onBlurConfirmPw();
      }
      if (userHelpText === "" && passwordHelpText === "" && confirmPwHelpText === "" 
         && username !== "" && password !== "" && confirmPw !== "") {
         if (password === confirmPw && !usernameExists) {
            fetchRegister()
               .then(data => {
                  console.log(data)
                     alert("Success");
                     history.push("/");
               })
               .catch(e => console.log(e))
            }   
         } else alert("Registration failed")
   }



   return (
      <React.Fragment>
         <SignUp 
            userTypes={userTypes}
            onChangeUsername={onChangeUsername}
            onChangePassword={onChangePassword}
            onChangeConfirmPw={onChangeConfirmPw}
            onChangeUserType={onChangeUserType}
            onBlurUsername={onBlurUsername}
            onBlurPassword={onBlurPassword}
            onBlurConfirmPw={onBlurConfirmPw}
            userError={userError}
            passWError={passWError}
            confirmPwError={confirmPwError}
            userHelpText={userHelpText}
            passwordHelpText={passwordHelpText}
            confirmPwHelpText={confirmPwHelpText}
            handleSignUp={handleSignUp}
            onFocusPw={onFocusPw}
         />
      </React.Fragment>
   )
}