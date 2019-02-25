const express = require('express');
const router = express.Router();
const User = require('../models/users');



router.post('/signUp', async (req, res) => {
  
  const newUser={};
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  try {
    console.log('=======',newUser,'=======');
    console.log(req.body, ' this is req.body');
    const createdUser = await User.create(newUser);
    req.session.logged = true;
    req.session.username = createdUser.username;
    console.log("In express session++++++++", req.session);
    res.json({
      status: 200,
      data: 'SignUp successful'
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});


// router.post('/login', async (req, res) => {
//   try {
//     const foundUser = await User.findOne({username: req.body.username});
//     if(foundUser){
//       console.log("foundUser in Server")
//       req.session.logged = true;
//       req.session.username = req.body.username;
//       console.log("====Login Session====",req.session)
//       res.json({
//       status: 200,
//       data: 'Login successful'
//       });
//     }else{
//       console.log('======Cannot Find username====')
//     }
//   } catch(err){
//     console.log(err);
//     res.send(err);
//   }
// });