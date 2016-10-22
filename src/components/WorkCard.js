import React from 'react';
import {Link} from 'react-router';

class WorkCard extends React.Component {
  bandleClick(){
    this.context.router.goBack()
  }
  render () {
    let address = `/workinfo/${this.props.url}`
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>
              <Link to={address} className="btn btn-primary" role="button" style={{marginRight:'10px'}}>查看详情</Link>
              <a href="#" className="btn btn-default" role="button" onClick={this.bandleClick.bind(this)}>返回</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
WorkCard.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default WorkCard;
