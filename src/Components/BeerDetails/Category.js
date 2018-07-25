import React from 'react';
import Tooltip from '../Tooltip';

const Category = (props) => {
  return (
    <div className="label">
      <span className="title">{ props.category }:</span>
      <span className="data">{ props.value }</span>
        <Tooltip data={ props.category } />
    </div>
  );
}

export default Category;
