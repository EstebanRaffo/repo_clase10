import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  render() {
    const {type} = this.props

    return (
      <div className={"alert alert-" + type} role="alert">
        This is a { type } alert—check it out!
      </div>
    );
  }
}

export default Alert

Alert.propTypes = {
  type : PropTypes.oneOf(['primary', 'secondary','warning','info','light','dark'])
}

Alert.defaultProps = {
  type : "primary"
}
