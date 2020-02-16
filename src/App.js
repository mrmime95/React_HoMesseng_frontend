import React from 'react'
import PropTypes from 'prop-types'
import route from './routes/route'
import RouteRenderer from './routes/RouteRenderer'
import GlobalStyles from './styles/global'

function App({ routeConfig }) {
  return (
    <>
      <GlobalStyles />
      <RouteRenderer routeConfig={routeConfig} />
    </>
  )
}

App.propTypes = {
  routeConfig: PropTypes.arrayOf(PropTypes.shape(route)).isRequired
}

export default App
