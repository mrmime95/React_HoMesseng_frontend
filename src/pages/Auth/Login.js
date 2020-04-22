import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../../components/Copyright'
import LoginForm from '../../templates/forms/LoginForm'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/auth'
import { setAlert } from '../../store/alert'

import { Redirect } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <LoginForm onLogin={handleLogin} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )

  async function handleLogin(user) {
    try {
      const body = JSON.stringify(user)
      const res = await axios.post('api/auth', body)
      dispatch(loginUser(true, res.data))
    } catch (err) {
      console.error(err.response.data.errors)
      err.response.data.errors.forEach(error => dispatch(setAlert('error', error.msg, 3000)))
    }
  }
}
