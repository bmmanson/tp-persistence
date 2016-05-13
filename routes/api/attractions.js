var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Promise = require('bluebird');
var days = require('./days.js');


router.get('/', function(req, res, next) {

});

router.get('/hotels', function(req, res, next){
	console.log("Hi, I'm a hotel api");
	Hotel.findAll({
        include: [Place]
    })
	.then(function(result){
		res.json(result);
	})
});

router.get('/restaurants', function(req, res, next) {
	console.log("And I'm a restaurants api");
	Restaurant.findAll({
        include: [Place]
    })
	.then(function(result){
		res.json(result);
	})
});

router.get('/activities', function(req, res, next){
	console.log("MORE ACTIVITIES");
	Activity.findAll({
        include: [Place]
    })
	.then(function(result){
		res.json(result);
	})
});

router.use('/days', days);


module.exports = router; 
