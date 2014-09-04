// JavaScript Document
var lat,lon;
$(document).ready(function(){
getLocation();
initialize();
$('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
$('#overlay').click(function(){
$('#popup').hide();    
$('#overlay').hide(); 

});

$('header').click(function(){
        homesweethome();
    });
});
    
/*	
	$('.shop').click(function(){
    $('.shop').hide();
	$('.travel').hide();
$('.food').hide();
$('.ent').hide();
    $("#popup").hide();
	$('#category').hide();
	$('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    });
});*/

function check(){
	$('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
    $("#popup").hide();
	$('#category').hide();
	$('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    
	}
/*
$('.travel').click(function(){
    $('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
    $("#popup").hide();
	$('#category').hide();
	$('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    });

$('.food').click(function(){
    $('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
$("#popup").hide();
	$('#category').hide();
	$('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    });
	
	$('.ent').click(function(){
    $('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
    $("#popup").hide();
	$('#category').hide();
	$('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    });

*/


/*
$('header').click(function(){
        homesweethome();
    });
    $('#homepage section').click(function(){
    $('#homepage').hide();
    $("#popup").hide();
    $('#map').show();
    tabs=$(this).data('title');
    window.localStorage.setItem('currentcat',tabs);
    initialize(tabs);
    });
*/






function homesweethome(){
$('[data-role="page"]').hide();
$('#category').slideDown();
$('.shop').hide();
$('.travel').hide();
$('.food').hide();
$('.ent').hide();
}



var map;
var infowindow;
function initialize(genre) {
  var pyrmont = new google.maps.LatLng(lat,lon);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: pyrmont,
    zoom: 15
  });

  var request = {
    location: pyrmont,
    radius: 500,
    types: [genre]
  };
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var image = new google.maps.MarkerImage(
    place.icon,
    new google.maps.Size(71, 71),
    new google.maps.Point(0, 0),
    new google.maps.Point(17, 34),
    new google.maps.Size(25, 25));
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: image

  });

  google.maps.event.addListener(marker, 'click', function() {
    $("#popup").html('');
    $("#popup").removeClass();
    $("#popup").addClass(window.localStorage.getItem('currentcat'));
    $("#popup").append("<u>"+place.name+"</u>");
    $("#popup").append("<br/>"+place.vicinity);
    $("#popup").show();
    $("#overlay").show();
    });
}
function getLocation()
  {
  if (navigator.geolocation)
    {
    (navigator.geolocation.getCurrentPosition(showPosition));
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }

function showPosition(position)
  {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  }
  
  function shop(){
	  $('.shop').show();
	  $('.activepage').hide();
	  }
	  
 function travel(){
	  $('.travel').show();
	  $('.activepage').hide();
	  }
	  
	  function food(){
	  $('.food').show();
	  $('.activepage').hide();
	  }
	  
	  function ent(){
	  $('.ent').show();
	  $('.activepage').hide();
	  }