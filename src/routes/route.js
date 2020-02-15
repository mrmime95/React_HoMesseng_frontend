import PropTypes from 'prop-types'

const route = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType,
  exact: PropTypes.bool,
  redirect: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape(PropTypes.any))
}

export default route
