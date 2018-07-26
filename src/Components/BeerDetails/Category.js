import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

const Category = (props) => {
  return (
    <div className="label">
      <span className="title"> { props.category }: </span>
      <span className="data"> { props.value } </span>
        <Tooltip data={ props.category } />
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Category;
