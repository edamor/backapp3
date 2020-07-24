import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
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






export default function SignUp({ 
  userTypes, 
  onChangeUsername,
  onChangePassword,
  onChangeConfirmPw,
  onChangeUserType,
  onBlurUsername,
  onBlurPassword,
  onBlurConfirmPw,
  userError,
  passWError,
  confirmPwError,
  userHelpText,
  passwordHelpText,
  confirmPwHelpText,
  handleSignUp,
  onFocusPw
  }) {
  const classes = useStyles();


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
                error={userError}
                onBlur={() => onBlurUsername()}
                onChange={(e) => onChangeUsername(e.target.value.trim())}
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
                onChange={(e) => onChangeUserType(e.target.value)}
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
                error={passWError}
                onBlur={() => onBlurPassword()}
                onChange={(e) => onChangePassword(e.target.value.trim())}
                helperText={passwordHelpText}
                onFocus={() => onFocusPw()}
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
                error={confirmPwError}
                onBlur={() => onBlurConfirmPw()}
                onChange={(e) => onChangeConfirmPw(e.target.value.trim())}
                helperText={confirmPwHelpText}
                onFocus={() => onFocusPw()}
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
