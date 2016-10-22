import React from 'react';

import BlogCard from '../components/BlogCard';
import {getBlogCard} from '../utils/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getBlogCard()
      .then( (recData) => {
        this.setState({
          data:recData.getData,
          wait:false
        })
      });
  }
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { this.state.wait ? '请稍等' : this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> ) }
      </div>
    )
  }
}

export default Blog;
