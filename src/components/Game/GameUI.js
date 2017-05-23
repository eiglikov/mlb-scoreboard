import React from 'react';
import PropTypes from 'prop-types';

import GameStyles from './GameStyles';

import GameItem from './GameItem';


class GameUI extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    var props = this.props;
    return(
      <div className="col-xs-12 col-sm-12 col-md-12" style={GameStyles.gameWrapper}>
        {
          props.isEmpty
            ? <GameItem isEmpty={props.isEmpty}/>

          : props.isGameArray
          ? props.data.games.game.map( function(info){
            if(info.status.status.toLowerCase() === "final"){
              return <GameItem
                key={info.id}
                data={info}
                handleClick={props.handleClick.bind(null,info)}
                isEmpty={props.isEmpty}/>
            } else {
              return <GameItem
                key={info.id}
                data={info}
                handleClick={null}
                isEmpty={props.isEmpty}/>
            }})

          : <GameItem
            key={props.data.games.game.id}
            data={props.data.games.game} handleClick={props.handleClick.bind(null,props.data.games.game)}
            isEmpty={props.isEmpty} />
        }
      </div>
    );
  }
}

export default GameUI;
