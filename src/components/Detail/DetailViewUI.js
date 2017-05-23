import React from 'react';
import PropTypes from 'prop-types';

import TeamView from './TeamView';
import InningsTable from './InningsTable';


import DetailStyles from './DetailStyles';

class DetailViewUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var props = this.props;

    return(
      <div className='container col-sm-6 col-sm-offset-3'>
        <div>
          <InningsTable
            box_score={props.box_score}
          />
        </div>
        <div>
          <TeamView batsmen={props.box_score.data.boxscore.batting} away={props.box_score.data.boxscore.away_fname} home={props.box_score.data.boxscore.home_fname} />
        </div>
      </div>
    );
  }
}


export default DetailViewUI;
