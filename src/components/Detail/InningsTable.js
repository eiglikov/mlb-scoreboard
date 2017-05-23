import React from 'react';
import PropTypes from 'prop-types';
import DetailStyles from './DetailStyles'


class InningsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var props = this.props;
    var inning_line_score = props.box_score.data.boxscore.linescore.inning_line_score;

    return(
      <div className='col-md-8 col-sm-10 col-xs-10 col-sm-offset-1 col-xs-offset-1 col-md-offset-2' style={DetailStyles.inningWrapper}>
        <table className="col-sm-12 col-xs-12 col-md-12">
          <thead>
            <tr>
              <th></th>
              {
                inning_line_score.map(function(value){
                  return <td key={value.inning}>
                    {value.inning}
                  </td>
                })
              }
              <td>
                R
              </td>
            </tr>
          </thead>

          <tbody>
            <tr style={DetailStyles.homeTeam}>
              <td>{props.box_score.data.boxscore.home_team_code.toUpperCase()}</td>
              {inning_line_score.map(function(value){
                return <td key={value.inning}>
                  {value.home}
                </td>
              })}
              <td>
                {props.box_score.data.boxscore.linescore.home_team_runs}
              </td>
            </tr>
            <tr style={DetailStyles.awayTeam}>
              <td>{props.box_score.data.boxscore.away_team_code.toUpperCase()}</td>
              {inning_line_score.map(function(value){
                return <td key={value.inning}>
                  {value.away}
                </td>
              })}
              <td>
                {props.box_score.data.boxscore.linescore.away_team_runs}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
          );
        }
      }
export default InningsTable;
