import React from 'react';
import Detail from '../components/Detail/Detail';

import ScoreHelper from '../helpers/mlbApiHelper';

class DetailContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      detail_data: this.props.location.state.data,
      box_score: {},
      isLoading: true
    }
  }
  componentDidMount() {
    this.makeRequest(this.state.detail_data.game_data_directory);
  }
  makeRequest(game_data_directory){
    ScoreHelper.getBoxScore(game_data_directory)
      .then((data) => {
        this.setState({
          box_score: data,
          isLoading: false
        })
      });
  }
  render() {
    return(
      <Detail
        detail_data={this.state.detail_data}
        isLoading={this.state.isLoading}
        box_score={this.state.box_score}
      />
    );
  }
};

export default DetailContainer;
