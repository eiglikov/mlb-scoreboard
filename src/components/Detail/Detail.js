import React from 'react';
import PropTypes from 'prop-types';

import DetailViewUI from './DetailViewUI'

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var props = this.props;
    return(
      <div>
        {
          props.isLoading
            ? <h1>Loading</h1>
          : <DetailViewUI box_score={props.box_score} />
        }
      </div>
    );
  }
}

export default Detail;
