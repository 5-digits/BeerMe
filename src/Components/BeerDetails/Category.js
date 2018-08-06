import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

const Category = (props) => {
  const formattedValue = props.category === "ABV" ? `${props.value}%` : props.value;
  return (
    <div className="label">
      <span className="title"> { props.category }: </span>
      <span className="data"> { formattedValue ? formattedValue : 'N/A' } </span>
        <Tooltip data={ props.category } />
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string,
  value: PropTypes.string
};

export default Category;
