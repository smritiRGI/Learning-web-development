import React, { useState } from 'react';
import {Modal , ModalBody,ModalFooter,ModalHeader,Button , Form,Input} from 'reactstrap';
import './Signup.css';

function Signup({show , handleClose}) {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [emailValue,setEmail] = useState();
  const [passwordValue,setPassword] = useState();

  return (
    <>
    <Modal isOpen={show} toggle={handleClose}>
          <ModalHeader toggle={handleClose}><h2>Sign Up</h2><h6>It's quick and easy!</h6></ModalHeader>
          <ModalBody>
            <Form>
              <span className='name'>
                <Input type="text" value={firstName} id="fname" 
                placeholder="First name" 
                onChange={(e) => setFirstName(e.target.value)}/>
                <Input type="text" id="lname" value={lastName} placeholder="Surname" 
                onChange={(e) => setLastName(e.target.value)} />
              </span>
                <Input type="email" value={emailValue} id="email" 
                placeholder="Email address" 
                onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" id="password" value={passwordValue} placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} />
                <h6 id="declaration">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                 You may receive SMS notifications from us and can opt out at any time.</h6>
                <Button variant="primary" id="signup-button" type="submit" disabled={
                  !firstName || !lastName || !emailValue || !passwordValue}
                >Sign Up</Button>
            </Form>
          </ModalBody>
    </Modal>
    </>
  )
}

export default Signup;