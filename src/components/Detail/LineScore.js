import React from 'react';
import PropTypes from 'prop-types';

import DetailStyles from './DetailStyles'

class LineScore extends React.Component {
  render(){
    var props = this.props;
    return(
      <td>
        {props.score}
      </td>
    );
  }
}

export default LineScore;
