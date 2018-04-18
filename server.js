'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/api/report', bodyParser.json(), (req, res) => {
  // TODO: Validate the field types
  if (req.body.trackingNumber >= 50000) {
    return res.status(400).json({
      message: 'Too big!',
      reason: 'ValidationError',
      location: 'trackingNumber'
    });
  }
  // TODO: Store the message
  return res.status(204).end();
});

app.listen(3000);