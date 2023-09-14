const express = require('express');
const route = express.Router();
const Controller = require('./controller');


route.post('/directSale',  Controller.postdata);
route.get('/getNFTpreview',Controller.getdata)






module.exports = route;