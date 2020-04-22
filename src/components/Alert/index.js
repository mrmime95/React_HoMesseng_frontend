import React from 'react'
import styled from 'styled-components'

import { Alert, AlertTitle } from '@material-ui/lab'
import { useSelector } from 'react-redux'

const StyledAlertTitle = styled(AlertTitle)`
  text-transform: uppercase;
`

const StyledAlert = styled(Alert)`
  margin-bottom: 10px;
`

export default function Copyright() {
  const alerts = useSelector(state => state.alert)

  return (
    <>
      {alerts &&
        alerts.map(({ id, msg, alertType }) => (
          <StyledAlert severity={alertType} key={id}>
            <StyledAlertTitle>{alertType}</StyledAlertTitle>
            {msg}
          </StyledAlert>
        ))}
    </>
  )
}
