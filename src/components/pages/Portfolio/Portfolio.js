import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import "./portfolio.css";

function Portfolio(){
    return( 
       <div>
           <div>
               <h1 className="display-4">
               Welcome to my portfolio
               </h1>
               <p className="lead">
               Working on good things. More are coming soon!
               </p>
           </div>
           <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/burger.png" />
          <Card.Body>
            <Card.Title className="lead">Work Day Scheduler</Card.Title>
            <Card.Text className="lead">
            Schedule important meetings or project thur a working day. Hours will change colors if is past, present, or future.
            </Card.Text>
          </Card.Body>
          <div class="button">
          <Button className="lead" href="https://civicajr91.github.io/calendar/" variant="primary" style={{width:"150px", alignContent:"center"}}>See Project</Button>
          </div>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="lead"> Password Generator</Card.Title>
            <Card.Text className="lead">
            Need helps getting secute passowords? Use my password generator. Follow the prompt steps to generate a password.{' '}
            </Card.Text>
          </Card.Body>
          <div class="button">
          <Button className="lead" href="https://civicajr91.github.io/Random-Password-Generator/" variant="primary" style={{width:"150px", alignContent:"center"}}>See Project</Button>
          </div>
        </Card>
        <Card class="cards">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="lead">Burger Logger App</Card.Title>
            <Card.Text className="lead">
            It's a CLI Application using Express Handlebars.All data is created and stores in MySQL.
            </Card.Text>
          </Card.Body>
          <div class="button">
          <Button className="lead" href="https://thawing-taiga-56965.herokuapp.com/" variant="primary" style={{width:"150px", alignContent:"center"}}>See Project</Button>
          </div>
        </Card>
      </CardDeck>
      </div>
    )
}

export default Portfolio;