import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Form from '../../../components/Form'
import TextField from '../../../components/Form/fields/TextField'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function LoginForm() {
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Form
        onSubmit={value => {
          console.log(value)
        }}
      >
        {() => (
          <>
            <TextField required autoFocus label="Email Address" name="email" />
            <TextField required name="password" label="Password" type="password" />
            {/* TODO: add remember me checkbox */}
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
          </>
        )}
      </Form>
      <Grid container>
        <Grid item xs>
          <Link to="forgot">Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link to="register">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </div>
  )
}
