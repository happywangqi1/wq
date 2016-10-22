import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span><br/>Home</Link>
        <Link activeStyle={{color:'#7C4DFF'}} to="/blog"><span className="glyphicon glyphicon-bookmark"></span><br/>Blog</Link>
        <Link activeStyle={{color:'#7C4DFF'}} to="/work"><span className="glyphicon glyphicon-education"></span><br/>Work</Link>
        <Link activeStyle={{color:'#7C4DFF'}} to="/about"><span className="glyphicon glyphicon-user"></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
