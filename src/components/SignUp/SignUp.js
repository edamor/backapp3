import React, {useState, useRef, useCallback} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Ed Amor
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//------------template-styles-end----------//






export default function SignUp({REGISTER_URL}) {
  const classes = useStyles();

  const [userValid, setUserValid] = useState(false);
  const [passWValid, setPassWValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const userTypes = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Partner" }
  ];
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("Personal");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const onChangeUsername = useCallback((e) => {setUsername(e.target.value.trim())},[]);
  const onChangeUserType = useCallback((e) => {setUserType(e.target.value.trim())},[]);
  const onChangePassword = useCallback((e) => {setPassword(e.target.value.trim())},[]);
  const onChangeConfirmPw = useCallback((e) => {setConfirmPw(e.target.value.trim())},[]);

  const errorMsgs = [
    "Username be at least 4 characters", 
    "Field cannot be left blank", 
    "Password must be at least 8 characters", 
    "Passwords don't match"
  ];
  const [userHelpText, setUserHelpText] = useState(""); 
  const [passwordHelpText, setPasswordHelpText] = useState(""); 
  const [confirmPwHelpText, setConfirmPwHelpText] = useState(""); 

  const onBlurUsername = useCallback((e) => {
    if (e.target.value === "") {
      setUserValid(true);
      setUserHelpText(errorMsgs[1]);
    } else if (username.length < 4) {
        setUserValid(true);
        setUserHelpText(errorMsgs[0]);
    } else {
      setUserValid(false);
      setUserHelpText("");
    } 
  },[errorMsgs, username])

  const onBlurPassword = useCallback((e) => {
    if (e.target.value === "") {
      setPassWValid(true);
      setPasswordHelpText(errorMsgs[1]);
    } else if (password.length < 8) {
      setPassWValid(true);
      setPasswordHelpText(errorMsgs[2]);
    } else if (confirmPw !== "" && password !== confirmPw) {
      setPassWValid(true);
      setConfirmPwValid(true);
      setPasswordHelpText(errorMsgs[3]);
      setConfirmPwHelpText(errorMsgs[3]);
    } else {
      setPassWValid(false);
      setConfirmPwValid(false);
      setPasswordHelpText("");
    }
  },[errorMsgs, password, confirmPw])

  const onBlurConfirmPw = useCallback((e) => {
    if (confirmPw !== password) {
      setConfirmPwValid(true);
      setPassWValid(true);
      setConfirmPwHelpText(errorMsgs[3]);
      setPasswordHelpText(errorMsgs[3]);
    } else if (confirmPw === "") {
      setConfirmPwValid(true);
      setConfirmPwHelpText(errorMsgs[1]);
    } else {
      setConfirmPwValid(false);
      setPassWValid(false);
      setConfirmPwHelpText("");
    }
  }, [errorMsgs, confirmPw, password])

  const onFocusPw = (e) => {
    if (passWValid && confirmPwValid) {
      setPasswordHelpText("");
      setConfirmPwHelpText("");
    }
  };

  const fetchRegister = async () => {
    let user = {username: username, password: password};
    let URL = REGISTER_URL + userType;
    let response = await fetch(URL, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else return await response.json()
  }


  const handleSignUp = () => {
    fetchRegister()
    .then(data => {
      alert("Success");
      console.log(data);
    })
    .catch(e => console.log(e))
  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="uname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                error={userValid}
                onBlur={onBlurUsername}
                onChange={onChangeUsername}
                value={username}
                helperText={userHelpText}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userType"
                label="Account Type"
                autoComplete="userType"
                onChange={onChangeUserType}
                value={userType}
                SelectProps={{
                  native: true,
                }}
                select
              >
                {userTypes.map((option) => (
                  <option key={option.id} value={option.label} >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passWValid}
                onBlur={onBlurPassword}
                onChange={onChangePassword}
                value={password}
                helperText={passwordHelpText}
                onFocus={onFocusPw}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="confirm-password"
                label="Confirm Password"
                type="password"
                name="confirm-password"
                autoComplete="current-password"
                error={confirmPwValid}
                onBlur={onBlurConfirmPw}
                onChange={onChangeConfirmPw}
                value={confirmPw}
                helperText={confirmPwHelpText}
                onFocus={onFocusPw}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
