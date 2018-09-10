import React from 'react'

const Loader = (props) => {
  return (
    <div className="loader">
      <h1>{ props.loadingText }</h1>
    </div>
  )
}

export default Loader;
