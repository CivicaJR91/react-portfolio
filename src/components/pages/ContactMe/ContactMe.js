import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./contactme.css";


function ContactMe() {
    return (
        <div>


            <h1 id="ttl" className="display-4">Contact Me!</h1>
            <p className="lead">Feel free to send me a message.</p>
            <div class="form">

            <Form>
                <Form.Group controlId="exampleForm.ControlInput1" style={{ alignContent:"center"}}>
                    <Form.Label className="lead">Enter Email Address</Form.Label>
                    <Form.Control className="lead field" type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1" style={{alignContent:"center"}}>
                    <Form.Label className="lead" >Enter Your message</Form.Label>
                    <Form.Control className="lead field" as="textarea" rows={3} />
                </Form.Group>
            </Form>
        
            </div>
            <div id= "button">
            <Button className="lead" type="submit">Submit</Button>
            </div>

        </div>
    )
}

export default ContactMe;