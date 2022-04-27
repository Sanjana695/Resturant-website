import React from 'react'
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (<>
   <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Email address:</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Contact:</Form.Label>
    <Form.Control type="number" placeholder="Enter Contact" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Complain:</Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>

<Button type="primary">
    Submit
</Button>
</Form>
   </>)
}
export default Contact