 const express = require('express');
 const app = express();
 const jwt = require('jsonwebtoken');
 const cors = require('cors');
 const bodyParser = require('body-parser');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors());

 app.post('/api/auth', (req, res)=>{
    
 })