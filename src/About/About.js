import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

import Pic from '../components/Pic';
import Search from '../components/Search';
import Echarts from '../components/Echarts';
import {searchGit} from '../utils/helpers.js';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      data:{},
      wait:0
    }
  }
  handleChange(e){
    this.setState({input:e.target.value})
  }
  handleSubmit(e){
    this.setState({
      wait:1
    })
    e.preventDefault();
    let account = this.state.input;
    searchGit(account)
      .then((resData) => {
        this.setState({
          input:'',
          data:resData.getData,
          wait:2
        })
      });
  }
  componentDidMount(){
    searchGit("happywangqi1")
      .then((resData) => {
        this.setState({
          input:'',
          data:resData.getData,
          wait:2
        })
      });
  }
  render () {
    let gitContent = this.state.wait==0 ? '' :
      this.state.wait==1 ? <div style={{textAlign:'center'}}><CircularProgress size={1.5} /></div> :
      <Search info={this.state.data}/>
    let styles={
      root:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        maxWidth:'760px',
        margin:'72px auto 10px',
        // marginTop:'72px',
        padding:'20px'
      },
      title:{
        color:'#00BCD4'
      },
      search:{
        padding:'10px',
        textAlign:'center',
        maxWidth:'90%',
        margin:'0 auto'
      },
      field:{
        width:'50%',
        marginRight:'20px'
      }
    }
    return(
      <div>
        <Pic />
        <div style={styles.root}>
          <h2 style={styles.title}>Search Github Info</h2>
          <div style={styles.search}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField hintText="search github"
                style={styles.field}
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
                inputStyle={{color:'#00BCD4'}}/>
                <FlatButton label="搜索" primary={true} type='submit'/>
            </form>
          </div>
          {gitContent}
          <Echarts />
        </div>
      </div>
    )
  }
}

export default About;
