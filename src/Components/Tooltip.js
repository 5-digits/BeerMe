import React, { Component } from 'react';
import PropTypes from 'prop-types';

import tooltipData from '../data/tooltipData';

class Tooltip extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false
    }

    this.tooltip = React.createRef()

    // bind functions
    this.openTooltip = this.openTooltip.bind(this)
    this.closeTooltip = this.closeTooltip.bind(this)
  }

  componentDidMount() {
    this.tooltip.current.focus()
  }

  openTooltip() {
    this.setState({
      showTooltip: true
    })
  }

  closeTooltip() {
    this.setState({
      showTooltip: false
    })
  }

  render() {
    let tooltipInfo = tooltipData[ this.props.data.toLowerCase() ];

    return (
      <div ref={ this.tooltip } className="question-help" tabIndex="0" onClick={ this.openTooltip } onBlur={ this.closeTooltip } >
        <i className="fa fa-question-circle"></i>
        <span className="tooltip" data-visible={ this.state.showTooltip } >
          <h3 className="header">
            { tooltipInfo.header }
          </h3>
          <p className="description">
            { tooltipInfo.description }
          </p>
        </span>
      </div>
    );
  }

}

Tooltip.propTypes = {
  data: PropTypes.string.isRequired,
};


export default Tooltip;
