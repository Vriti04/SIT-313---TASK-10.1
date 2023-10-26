const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const path = require('path');

const port = 3000;

const apiKey = 'b348d6921e2cdbe9264dd8d6c76fa8b2-324e0bb2-a84dbd3f';
const domain = 'sandboxcdbbdf5aa2254ba68cef3b0a6e9858b7.mailgun.org';

const mg = mailgun({ apiKey, domain });


const app= express();
app.use(bodyParser.urlencoded({extended : true}));

app.get('/subscribe', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/subscribe', async(req, res)=>{
    const { email } = req.body;

    const msg = {
      from: 'vriti4862.be22@chitkara.edu.in',
      to: email, 
      subject: 'DEV@DEAKIN welcomes you to the family.',
      text: 'Thank you for subscribing to DEV@DEAKIN.'
    }
  
    try {
      await mg.messages().send(msg);
      console.log('Email is successfully sent to the address');
      res.status(202).json({ message: 'Thank you for subscribing. The welcome email has been sent successfully to your inbox.'});
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Oops, an error occurred while completing the request.'});
    }
  });


  app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});