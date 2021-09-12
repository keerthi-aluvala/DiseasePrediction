import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

import validate from './validateInfo';

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
  paperStyle: {
    padding : "30", 
    width: "600", 
    margin:"20px auto"},
  form: {
    width: '90%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    Password1: '',
    Password2: '',
  });

  const classes = useStyles();

  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  }
  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    console.log(errors);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={10} className={classes.paperStyle}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange} 
              />
            </Grid>
            {errors.username && <p>{errors.username}</p>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={handleChange} 
              />
            </Grid>
            {errors.email && <p>{errors.email}</p>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Password1"
                label="Password1"
                type="Password1"
                id="Password1"
                autoComplete="current-password"
                value={values.Password1}
                onChange={handleChange} 
              />
            </Grid>
            {errors.password1 && <p>{errors.password1}</p>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Password2"
                label="Password2"
                type="Password2"
                id="Password2"
                autoComplete="current-password"
                value={values.Password2}
                onChange={handleChange} 
              />
            </Grid>
            {errors.password2 && <p>{errors.password2}</p>}
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Doctor"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Patient"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <h1></h1>
        </form>
      </div>
      </Paper>
    </Container>
  );
}