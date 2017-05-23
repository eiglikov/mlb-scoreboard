import React from 'react';
import PropTypes from 'prop-types';
import GameStyles from './GameStyles';


class GameItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;
    var home, away;

    if (props.isEmpty === false){
      if(props.data.status.status === "Final"){
        props.data.linescore.r.home > props.data.linescore.r.away
        ?  home = _.merge({},GameStyles.homeTeam, GameStyles.winner)
        : home = _.merge({},GameStyles.homeTeam, GameStyles.loser)

        props.data.linescore.r.away > props.data.linescore.r.home
        ? away = _.merge({},GameStyles.awayTeam, GameStyles.winner)
        : away = _.merge({},GameStyles.awayTeam, GameStyles.loser)
      } else {
        home = GameStyles.homeTeam
        away = GameStyles.awayTeam
      }

    }
    return(
      <div>
        {
          props.isEmpty
          ?
            <div style={GameStyles.gamesNotFound}>
              No games today
            </div>
          :
          <div className="row" onClick={props.handleClick} style={GameStyles.gameItemWrapper}>

            <div className="col-md-8 col-xs-10 col-xs-offset-1 col-md-offset-2">
              <div style={home}>
                {props.data.home_team_name}
                {
                  props.data.status.status === "Final"
                    ? <span style={GameStyles.score}> {props.data.linescore.r.home} </span>
                  : null
                }
              </div>

              <div style={away}>
                {props.data.away_team_name}
                {
                  props.data.status.status === "Final"
                    ? <span style={GameStyles.score}> {props.data.linescore.r.away} </span>
                  : null
                }
              </div>
              <div style={GameStyles.status}>
                {props.data.status.status}
              </div>
            </div>
          </div>
        }
      </div>
    );

  }
}

GameItem.propTypes = {
  isEmpty: PropTypes.bool.isRequired
}
export default GameItem;
