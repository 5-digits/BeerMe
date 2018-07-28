import React from 'react'
import PropTypes from 'prop-types'

const Notice = (props) => {
  return (
    <span className={ `notice ${props.type}` }>{ props.text }</span>
  )
}

Notice.propTypes = {
  type : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired
}

export default Notice;
