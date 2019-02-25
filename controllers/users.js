const express = require('express');
const router = express.Router();
const User = require('../models/users');



router.get('/', async (req, res, next) => {
	console.log(req.body, ' this is get all users')
    try {
    	const allUsers = await User.find({});
      // This is the response to react
    	res.json({
    		status: 200,
    		data: allUsers
    	});
    } catch (err) {
    	res.send(err)
    }
})