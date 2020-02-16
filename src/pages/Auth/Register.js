import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import RegisterForm from '../../templates/forms/RegisterForm'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <RegisterForm />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
