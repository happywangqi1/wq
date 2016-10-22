import React from 'react';
import {getWorkMd} from '../utils/helpers';
import marked from 'marked';
import hljs from 'highlight.js';

class WorkInfo extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    getWorkMd(this.props.params.add)
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
    let content = marked(this.state.data)
    return(
      <div className='post-content'>
        {this.state.wait ? <p style={styles.loading}>loading...</p> : <div dangerouslySetInnerHTML = {{__html:content}} />}
      </div>
    )
  }
}
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});
export default WorkInfo;
