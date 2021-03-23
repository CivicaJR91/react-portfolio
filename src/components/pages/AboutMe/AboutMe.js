import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AboutMe(){

    return( 
        <Jumbotron>
            <Col xs={6} md={4}>
      <Image src="./components/pages/AboutMe/jan.jpg/171x180" roundedCircle />
    </Col>
  <h1>Welcome To My Portfolio!</h1>
  <p class="text-left maincopy">I'm a digital marketing professional with an extensive background in multiple
                        industries. I have spent the last nine years integrating digital channels, managing
                        email programs, and managing customer data.</p>
                    <p class="text-left maincopy">Over the years, I had the opportunity to work on many different projects. From
                        user interface optimization to driving traffic to websites.
                        Was working on websites and emails optimization that I developed the curiosity to learn basic
                        HTML. Making little changes to templates I realized that I should have learned web development.
                    </p>
                    <p class="text-left maincopy">Finally, after many years in the process, I considered the SMU Full Stack Web
                        Development Bootcamp. Today I'm starting my journey.</p>
  
</Jumbotron>




    )
}

export default AboutMe;