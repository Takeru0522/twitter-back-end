const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));

// bodyParser.json() will allow our server to read the body of our fetch requests
// because fetch will sending json , not a form data
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));



// Require the controller after the middleware

const authController = require('./controllers/authControllers');


app.use('/api/v1/users', authController);


app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});