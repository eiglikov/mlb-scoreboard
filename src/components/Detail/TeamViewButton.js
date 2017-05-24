import React from 'react';
import DetailStyles from './DetailStyles';

class TeamViewButton extends React.Component {
  render() {
    var homeStyle, awayStyle;
    var props = this.props;

    props.showDetails.initialRender || props.showDetails.showHomeTeamDetails
    ? homeStyle = _.merge({},DetailStyles.homeTeam,DetailStyles.active)
    : homeStyle = DetailStyles.homeTeam;

    props.showDetails.showAwayTeamDetails
    ? awayStyle =  _.merge({},DetailStyles.awayTeam,DetailStyles.active)
    : awayStyle = DetailStyles.awayTeam

    return(
      <div>
        {
          props.home
            ? <div className="col-sm-offset-1 col-lg-offset-3 col-md-3 col-md-offset-2 col-sm-3 col-xs-3 col-xs-offset-3" style={DetailStyles.homeButtonWrapper} >
              <button className="btn btn-default" style={homeStyle} onClick={props.handleClick}>
                {props.home}
              </button>
            </div>
          : <div className="col-sm-3 col-sm-offset-1 col-xs-6" >
            <button className="btn btn-default" style={awayStyle} onClick={props.handleClick}>
              {props.away}
            </button>
          </div>
        }
      </div>
    );
  }
}

export default TeamViewButton;
