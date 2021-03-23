import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Portfolio(){
    return( 
       <div>
           <div>
               <h1>
               Welcome to my portfolio
               </h1>
               <h2>
               Working on good things. More are coming soon!
               </h2>
           </div>
    <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <Card.Text>
            Schedule important meetings or project thur a working day. Hours will change colors if is past, present, or future.
            </Card.Text>
          </Card.Body>
          <Link to="https://civicajr91.github.io/calendar/">
          <Button variant="primary">See Project</Button>
          </Link>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
            Need helps getting secute passowords? Use my password generator. Follow the prompt steps to generate a password.{' '}
            </Card.Text>
          </Card.Body>
          <Link to="https://www.linkedin.com/in/janlizsuarezrosado/">
          <Button variant="primary">See Project</Button>
          </Link>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Burger Logger App</Card.Title>
            <Card.Text>
            It's a CLI Application using Express Handlebars.All data is created and stores in MySQL.
            </Card.Text>
          </Card.Body>
          <Link to="https://www.linkedin.com/in/janlizsuarezrosado/">
          <Button variant="primary">See Project</Button>
          </Link>
        </Card>
      </CardGroup>
      </div>
    )
}

export default Portfolio;