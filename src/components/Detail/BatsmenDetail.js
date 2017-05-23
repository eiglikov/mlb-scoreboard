import React from 'react';
import DetailStyles from './DetailStyles';

class BatsmenDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;
    return(
      <table className="table" style={DetailStyles.teamWrapper}>
        <thead>
          <tr>
            <th>Name</th>
            <th>a</th>
            <th>h</th>
            <th>rbi</th>
            <th>bb</th>
            <th>so</th>
            <th>avg</th>
          </tr>
        </thead>

        <tbody>
          {
            props.batsmen.batter.map(function(info){
              return <tr key={info.id}>
                <td>{info.name_display_first_last}</td>
                <td>{info.a}</td>
                <td>{info.h}</td>
                <td>{info.rbi}</td>
                <td>{info.bb}</td>
                <td>{info.so}</td>
                <td>{info.avg}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      )
    }
  }

  export default BatsmenDetail;
