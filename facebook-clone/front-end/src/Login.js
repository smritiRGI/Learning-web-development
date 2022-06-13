import React , {useState, useHistory} from 'react';
import {Form , Button , Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Login.css';
import Signup from './Signup';

function Login() {
  
  const [emailValue , setEmail] = useState();
  const [passwordValue , setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClose = ()=>setShow(false);

  return (
    <div className="login">
        <div id="login-brand">
            <img id="logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300vw" alt="facebook logo"/>
            <h2 id="logo-caption">Facebook helps you connect and share <br></br>with the people in your life.</h2>
        </div>
        <div id="login-form">
            <Form>
                <Input type="email" value={emailValue} id="email" 
                placeholder="Email address" 
                onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" id="password" value={passwordValue} placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} />
                <Button variant="primary" id="login-button" type="submit" 
                    disabled= {!emailValue || !passwordValue}>Log In</Button>
                <br/>
                <a id="forgot-password" href="/">Forgotten Password?</a>
                <hr/>
          </Form>
          <Button className='signup-button' 
          onClick={() => setShow(true)}>Create New Account</Button>
          {show ? <Signup show={show}  handleClose={handleClose} /> : <div></div>}
        </div>
    </div>
  )
}

export default Login;