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

export default function RegisterForm() {
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
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
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Register
            </Button>
          </>
        )}
      </Form>
      <Grid container>
        <Grid item>
          <Link to="login">{'Have account? Log in'}</Link>
        </Grid>
      </Grid>
    </div>
  )
}
