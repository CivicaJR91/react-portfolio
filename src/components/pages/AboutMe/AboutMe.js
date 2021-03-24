import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import "./aboutme.css";
import jan from "./images/jan.jpg"
import resume from "./images/Janliz-Suarez-CRM-MARKETING.pdf";


function AboutMe() {

    return (
        <div>
            <Jumbotron id="container">
                <Col xs={6} md={4}>
                    <Image src={jan} style={{width:"171px", height:"180px"}} id="janimg"roundedCircle />
                </Col>
                <h1 id="title" className="display-4">Welcome To My Portfolio!</h1>
                <p className="lead" class="text maincopy">I'm a digital marketing professional with an extensive background in multiple
                industries. I have spent the last nine years integrating digital channels, managing
                        email programs, and managing customer data.</p>
                <p className="lead" class="text maincopy">Over the years, I had the opportunity to work on many different projects. From
                user interface optimization to driving traffic to websites.
                Was working on websites and emails optimization that I developed the curiosity to learn basic
                HTML. Making little changes to templates I realized that I should have learned web development.
                    </p>
                <p className="lead" class="text maincopy">Finally, after many years in the process, I considered the SMU Full Stack Web
                        Development Bootcamp. Today I'm starting my journey.</p>

            </Jumbotron>
            <div class="row" className="lead">
                <h4 className="lead"> Let's Keep In Touch!</h4>
                </div>
                <div id="touch" className="col-sm-12">
                <a href="https://www.linkedin.com/in/janlizsuarezrosado/" id="link" className="fa fa-linkedin title"></a>
                <a href="https://github.com/CivicaJR91" className="fa fa-github title" id="git"></a>
                <a href={resume} download="" className="title" id="resume">Resume</a>
                </div>
        </div>




    )
}

export default AboutMe;