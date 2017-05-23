import React from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import GameStyles from './GameStyles';

import FavFilter from './FavFilter';
import GameUI from './GameUI';


class Game extends React.Component {
  render() {
    var props = this.props;
    return(
      <div>
        {
          props.isLoading === true
          ? <h1>Loading</h1>
          : <div className="container col-sm-6 col-sm-offset-3" style={GameStyles.headerWrapper}>
            <div className="row">

              <div className="col-xs-2 col-sm-1" style={GameStyles.leftArrow} onClick={props.onPrevDay}>
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </div>

              <div className="col-xs-4 col-sm-3" style={GameStyles.dateWrapper} >
                <Datetime
                  value={props.date}
                  onChange={props.onChange}
                  dateFormat="MMMM D, YYYY"
                  timeFormat={false}
                  inputProps={ {readOnly:true}}/>
                </div>

                <div className="col-xs-2 col-sm-1" style={GameStyles.rightArrow} onClick={props.onNextDay}>
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </div>
                <div className="pull-right">
                  <FavFilter
                    onUpdateFavTeam={props.onUpdateFavTeam}
                    favTeam={props.favTeam}
                    onSubmitFav={props.onSubmitFav} />
                  </div>
                </div>

                <div className="row">
                  <GameUI
                    data={props.finalData}
                    handleClick={props.handleClick}
                    isGameArray={props.isGameArray}
                    isEmpty={props.isEmpty}
                    isLoading={props.isLoading}/>
                  </div>
                </div>
              }
            </div>
          );
        }
      }
      Game.propTypes = {
        handleClick : PropTypes.func.isRequired
      }

      export default Game;
