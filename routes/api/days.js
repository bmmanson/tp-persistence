var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Day = require('../../models/day');
var Promise = require('bluebird');


router.get('/', function(req, res, next) {

});

router.get('/all', function(req, res, next){
	Day.findAll()
	.then(function(days){
		res.json(days);
	})
})

router.get('/:id', function(req, res, next) {
	//id is the day requested. Gets hotels, restaurants and 
});

router.post('/:id/hotels', function(req, res, next){
	//adds hotels to day
});

router.post('/:id/restaurants', function(req, res, next){

});

router.post('/:id/activities', function(req, res, next){

});

router.post('/:id', function(req, res, next){

	var dayNumber = req.params.id;
	Day.findOrCreate({
		where: {
			number: dayNumber
		}
	})
	.then(function(response){
		res.json(response);
		console.log(response);
	})
});


module.exports = router;