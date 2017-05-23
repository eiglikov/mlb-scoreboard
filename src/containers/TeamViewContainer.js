import React from 'react';
import TeamViewButton from '../components/Detail/TeamViewButton';
import BatsmenDetail from '../components/Detail/BatsmenDetail';


class TeamViewContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: {
        initialRender: true,
        showHomeTeamDetails: false,
        showAwayTeamDetails: false
      },
      batsmen: this.props.batsmen[0]
    }
  }

  handleHomeClick = (data) => {
    this.setState({
      showDetails: {
        initialRender: false,
        showHomeTeamDetails: true,
        showAwayTeamDetails: false
      },
      batsmen: this.props.batsmen[0]
    });
  }
  handleAwayClick = (data) =>{
    this.setState({
      showDetails: {
        initialRender: false,
        showHomeTeamDetails: false,
        showAwayTeamDetails: true
      },
      batsmen: this.props.batsmen[1]
    });
  }
  render(){
    return(
      <div>
        <div className="row">
          <span>
            <TeamViewButton
              handleClick={this.handleHomeClick.bind(null,this.props.batsmen[0])}
              batsmen={this.props.batsmen[0]}
              home={this.props.home}
              showDetails={this.state.showDetails}
            />
          </span>

          <span>
            <TeamViewButton
              handleClick={this.handleAwayClick.bind(null,this.props.batsmen[1])}
              batsmen={this.props.batsmen[1]}
              away={this.props.away}
              showDetails={this.state.showDetails}
            />
          </span>
        </div>
        <BatsmenDetail batsmen={this.state.batsmen} />
      </div>
    );
  }
};

export default TeamViewContainer;
