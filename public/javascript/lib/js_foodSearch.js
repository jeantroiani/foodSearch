
function currentTime(){
date=new Date();

var day=date.getDate().toString();
var month= (date.getMonth()+1).toString();  
var year=date.getFullYear().toString();

if (month < 10){
		month= "0" +month
	 };

if (day < 10){
 	 day="0"+ day
  	};

var current_time = year+month+day
return current_time
};


$(document).ready(function(){

	$('form').on('submit', function( event ){
		event.preventDefault();
		var location = $('#location').val();
		var searchFor = $('#search_for').val();
		var url = 'https://api.foursquare.com/v2/venues/search?near='+location+'&query='+searchFor+'&limit=5&client_id=0VZMIAONYAU005AKUWZUEWHLUXHM2Z4W4H3RQNJX33IB55TY&client_secret=SG50Q3CU4M0GD2NSOAJSKD4PPBU5HXKNSLFBENDTSHBCTFYF&v='+currentTime();
		$('#list_item').text(" ");
		$.get(url,function(places){
			places.response.venues.forEach(function(venue) {	
				var newVenue = Mustache.render($('#venue_template').html(), venue)
 				$(newVenue).prependTo('#list_item');
			});
		});
	});
});

