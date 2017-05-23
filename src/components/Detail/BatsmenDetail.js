import React from 'react';
import DetailStyles from './DetailStyles';


class Batsmen extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;
    return(
      <tr>
        <td>{props.batsmen.name_display_first_last}</td>
        <td>{props.batsmen.a}</td>
        <td>{props.batsmen.h}</td>
        <td>{props.batsmen.rbi}</td>
        <td>{props.batsmen.bb}</td>
        <td>{props.batsmen.so}</td>
        <td>{props.batsmen.avg}</td>
      </tr>
    )
  }
}
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
              return <Batsmen
                key={info.id}
                batsmen={info} />
            })
          }
        </tbody>
      </table>
      )
    }
  }

  export default BatsmenDetail;
