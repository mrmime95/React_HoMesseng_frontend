import React from 'react'
import PropTypes from 'prop-types'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../../components/Copyright'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/auth'
import { setAlert } from '../../store/alert'
import RegisterForm from '../../templates/forms/RegisterForm'

import { Redirect } from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <RegisterForm onRegister={handleRegister} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )

  async function handleRegister(newUser) {
    try {
      const body = JSON.stringify(newUser)
      const res = await axios.post('api/users', body)

      dispatch(registerUser(true, res.data))
      dispatch(setAlert('success', `Registered as ${newUser.name}`))
    } catch (err) {
      console.error(err.response.data.errors)
      err.response.data.errors.forEach(error => dispatch(setAlert('error', error.msg, 3000)))
    }
  }
}

Register.propTypes = {
  setUser: PropTypes.func
}

export default Register
