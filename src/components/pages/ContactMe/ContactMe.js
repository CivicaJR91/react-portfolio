import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function ContactMe() {
    return (
        <div>


            <h1 className="display-4">Contact Me!</h1>
            <p className="lead">Feel free to send me a message.</p>

            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button type="submit">Submit form</Button>

        </div>
    )
}

export default ContactMe;