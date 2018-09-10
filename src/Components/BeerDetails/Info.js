import React from 'react'

const Info = (props) => {
  if ( props.parent ) {
    return (
      <div className="description">
        <h2>{ props.header}</h2>
        { props.text ? <p> { props.text }</p> : null }
        { props.children ? props.children : null }
      </div>
    );
  }
  return null;
}

export default Info;
