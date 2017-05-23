import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import ScoreHelper from '../helpers/mlbApiHelper';
import Game from '../components/Game/Game';

class GameDateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      final_data: {},
      isLoading: true,
      favTeam: '',
      date: moment(),
      isGameArray: true,
      isEmpty: false
    }
  }
  componentWillMount() {
    this.makeRequest(this.state.date);
  }
  makeRequest(date){
    ScoreHelper.getScore(date, this.state.favTeam)
    .then((info) => {
      this.setState({
        final_data: info.data,
        isLoading: false,
        isGameArray: _.isArray(info.data.data.games.game),
        isEmpty: !_.has(info.data.data.games, 'game')
      });
    });
  }
  handleClick = (data) => {
    this.context.router.push({
      pathname: '/detail',
      state: {
        data: data
      }
    });
  }
  handleChange = (date) => {
    this.setState({
      date: date,
      isLoading: true
    });
    setTimeout(function(){
      this.makeRequest(this.state.date);
    }.bind(this),100)

  }
  handleNextDay = () => {
    this.setState({
      date: this.state.date.add(1,'day')
    })
    this.handleChange(this.state.date);
  }
  handlePrevDay = () => {
    this.setState({
      date: this.state.date.subtract(1,'day')
    });
    this.handleChange(this.state.date);
  }

  handleUpdateFavTeam = (elem) =>{
    this.setState({
      favTeam : elem.target.value
    })
  }
  handleSubmitFavTeam = (event) => {
    event.preventDefault();
    this.setState({
      final_data: ScoreHelper.sortFavTeam(this.state.final_data, this.state.favTeam)
    })
  }
  render() {
    return(
      <Game
        finalData={this.state.final_data.data}
        handleClick={this.handleClick}
        isLoading={this.state.isLoading}
        onChange={this.handleChange}
        onUpdateFavTeam={this.handleUpdateFavTeam}
        favTeam={this.state.favTeam}
        onSubmitFav={this.handleSubmitFavTeam}
        isGameArray={this.state.isGameArray}
        isEmpty={this.state.isEmpty}
        date={this.state.date}
        onNextDay={this.handleNextDay}
        onPrevDay={this.handlePrevDay}/>
      );
    }
  };

  GameDateContainer.contextTypes = {
    router: PropTypes.object.isRequired
  }
  export default GameDateContainer;
