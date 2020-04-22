import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import route from './routes/route'
import RouteRenderer from './routes/RouteRenderer'
import GlobalStyles from './styles/global'
import Alert from './components/Alert'

const AlertContainer = styled.div`
  position: absolute;
  min-width: 30%;
`

function App({ routeConfig }) {
  return (
    <>
      <GlobalStyles />
      <AlertContainer>
        <Alert />
      </AlertContainer>
      <RouteRenderer routeConfig={routeConfig} />
    </>
  )
}

App.propTypes = {
  routeConfig: PropTypes.arrayOf(PropTypes.shape(route)).isRequired
}

export default App
