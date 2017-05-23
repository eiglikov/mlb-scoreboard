var React = require('react');
import PropTypes from 'prop-types';
import DetailStyles from './DetailStyles'

class DisplayInning extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var props = this.props;
    console.log(props);

    return(
      <td>
        {props.inning}
      </td>
    )
  }
}

export default DisplayInning;
