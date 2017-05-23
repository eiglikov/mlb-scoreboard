import React from 'react';
import PropTypes from 'prop-types';

import TeamViewContainer from '../../containers/TeamViewContainer';
import InningsTable from './InningsTable';


import DetailStyles from './DetailStyles';

class DetailViewUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;
    console.log(props);

    return(
      <div className='container col-sm-6 col-sm-offset-3'>
        <div className='text-center'>
          <h2>{props.box_score.data.boxscore.date}</h2>
        </div>
        <div>
          <InningsTable
            box_score={props.box_score}
          />
        </div>
        <div>
          <TeamViewContainer
            batsmen={props.box_score.data.boxscore.batting} away={props.box_score.data.boxscore.away_fname} home={props.box_score.data.boxscore.home_fname} />
        </div>
      </div>
    );
  }
}


export default DetailViewUI;
