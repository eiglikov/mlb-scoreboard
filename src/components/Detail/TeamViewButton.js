import React from 'react';


var teamStyles={
  teamWrapper: {
    marginTop: "50px"
  },
  active: {
    color: "blue"
  },
  homeButtonWrapper: {
    textAlign: "left"
  }
}

class TeamViewButton extends React.Component {
  render() {
    var homeStyle, awayStyle;
    var props = this.props;

    props.showDetails.initialRender || props.showDetails.showHomeTeamDetails
    ? homeStyle = _.merge({},teamStyles.homeTeam,teamStyles.active)
    : homeStyle = teamStyles.homeTeam;

    props.showDetails.showAwayTeamDetails
    ? awayStyle =  _.merge({},teamStyles.awayTeam,teamStyles.active)
    : awayStyle = teamStyles.awayTeam

    return(
      <div>
        {
          props.home
            ? <div className="col-sm-offset-1 col-lg-offset-3 col-md-3 col-md-offset-2 col-sm-3 col-xs-3 col-xs-offset-3" style={teamStyles.homeButtonWrapper} >
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
