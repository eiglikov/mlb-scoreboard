import React from 'react';
import PropTypes from 'prop-types';
import GameStyles from './GameStyles';


class FavFilter extends React.Component {
  render(){
    var props = this.props;
    return(
      <div className="col-xs-6 col-sm-4" style={GameStyles.favFilterWrapper}>
        <form className="form-inline" onSubmit={props.onSubmitFav}>
          <div className="input-group">
            <span className="form-group" title="Favorite Team Name">
              <input
                className="form-control"
                placeholder = "Blue Jays"
                onChange={props.onUpdateFavTeam}
                value= {props.favTeam}
                type="text" />
            </span>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit" >
                Save
              </button>
            </span>
          </div>
        </form>
      </div>
      )
    }
  }

export default FavFilter;
