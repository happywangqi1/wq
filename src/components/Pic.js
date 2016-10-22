import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

import Pic1 from '../images/Pic1.jpg';
import Pic2 from '../images/pic2.jpg';
import Pic3 from '../images/pic3.jpg';

class Pic extends React.Component {
  render () {
    return(
      <Carousel style={{height:'200px',overflow:'hidden'}}>
        <Carousel.Item>
          <img style={{display:'block',width:'100%',height:'300px'}} src={Pic1}/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{display:'block',width:'100%',height:'300px'}} src={Pic2}/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{display:'block',width:'100%',height:'300px'}} src={Pic3}/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Pic;
