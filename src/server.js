const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Create a database (in-memory for this example)
const subscriptions = [];

// Body parser middleware to parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service
  auth: {
    user: 'rahul4825.be22@chitkara.edu.in', // Replace with your email address
    pass: 'rahul31122612' // Replace with your email password
  }
});

// API endpoint to subscribe to the newsletter
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Check if the email is already subscribed
  if (subscriptions.includes(email)) {
    return res.status(400).json({ message: 'Email already subscribed.' });
  }

  // Store the email in your database
  subscriptions.push(email);

  // Send a welcome email
  const mailOptions = {
    from: 'rahul4825.be22@chitkara.edu.in', 
    to: email,
    subject: 'Welcome to Our Newsletter',
    text: 'Thank you for subscribing to our newsletter! We look forward to sharing exciting updates with you.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send the welcome email.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Welcome email sent successfully.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
