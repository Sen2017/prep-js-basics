var degreeOutside = 70;
var numberOfClouds = 50;

function isItRaining(degreeOutside, numberOfClouds){
	if(degreeOutside < 70 && numberOfClouds > 50){
		return console.log('It is raining outside');
	}
}

isItRaining(50, 20)