import React from 'react';
import PropTypes from 'prop-types';

import DisplayInning from './DisplayInning';
import LineScore from './LineScore';
import TeamView from './TeamView';


import DetailStyles from './DetailStyles';

class DetailViewUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;
    var inning_line_score = props.box_score.data.boxscore.linescore.inning_line_score;

    return(
      <div className='container col-sm-6 col-sm-offset-3'>
        <div className='col-md-8 col-sm-10 col-xs-10 col-sm-offset-1 col-xs-offset-1 col-md-offset-2' style={DetailStyles.inningWrapper}>
          <table className="col-sm-12 col-xs-12 col-md-12">
            <thead>
              <tr>
                <th></th>
                {
                  inning_line_score.map(function(value){
                    return <DisplayInning
                      key={value.inning}
                      inning={value.inning} />
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
                  return <LineScore
                    key={value.inning}
                    score={value.home}
                    inning={value.inning} runs={props.box_score.data.boxscore.linescore.home_team_runs}/>
                })}
                <td>
                  {props.box_score.data.boxscore.linescore.home_team_runs}
                </td>
              </tr>
              <tr style={DetailStyles.awayTeam}>
                <td>{props.box_score.data.boxscore.away_team_code.toUpperCase()}</td>
                {inning_line_score.map(function(value){
                  return <LineScore
                    key={value.inning}
                    score={value.away}
                    inning={value.inning} runs={props.box_score.data.boxscore.linescore.away_team_runs}/>
                })}
                <td>
                  {props.box_score.data.boxscore.linescore.away_team_runs}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <TeamView batsmen={props.box_score.data.boxscore.batting} away={props.box_score.data.boxscore.away_fname} home={props.box_score.data.boxscore.home_fname} />
        </div>
      </div>
    );
  }
}


export default DetailViewUI;
