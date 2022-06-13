 const express = require('express');
 const app = express();
 const jwt = require('jsonwebtoken');
 const cors = require('cors');
 const bodyParser = require('body-parser');

 app.listen(8000, () => console.log("listening to 8000"));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors());

 app.post('/api/auth', async (req, res)=>{
    try{
        const {userEmail , password} = req.body;
        const token_payload = {
            userEmail : userEmail,
            password : password
        };

        let token = jwt.sign(
            token_payload,
            "jwt_secret_password",
            { expiresIn: '2h' }
        );

        let response = {
        message: 'Token Created, Authentication Successful!',
        token: token
        };

        // return the information including token as JSON
        return res.status(200).json(response);
    }
    catch (e){
      return res.status("409").json("Authentication failed." + e);
    }
 })