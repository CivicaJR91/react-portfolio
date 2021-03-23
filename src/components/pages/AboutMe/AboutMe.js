import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function AboutMe(){
    return( 
        <Jumbotron>
            <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  
</Jumbotron>
    )
}

export default AboutMe;