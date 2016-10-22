import React from 'react';
import WorkCard from '../components/WorkCard';
import {getWorkCard} from '../utils/helpers.js';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getWorkCard()
    .then((resData) => {
      this.setState({
        data:resData.getData,
        wait:false
      })
    })
  }
  render () {
    let styles={
      loading:{
        color:'#388E3C',
        fontSize:'28px',
        textAlign:'center',
        height:'100vh',
        lineHeight:'100vh'
      }
    }
    return(
      <div className='row'>
        {this.state.wait ? <p style={styles.loading}>loading...</p> : this.state.data.map( (item,index) => <WorkCard {...item} key={index} />)}
      </div>
    )
  }
}

export default Work;
