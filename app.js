
// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();


// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in localStorage
  storage.setLocationData(city, state);

  // Get and Display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});




function getWeather() {
weather.getWeather()
	.then(results => {
	  ui.paint(results);
	})
  .catch(err => console.log(err));
}







/*
1)Check if browser supports geolocation, if not tell us, if so- continue to next line
2)push the coordinates into an object called Geo
3)make an ajax call to weather api using the coordinates
4)display response from ajax call into html
*/
/*
// $(document).ready(function() {
//   var key ="&APPID=4e93dcc7568b48181fe68e883aede969",
//       url ="api.openhweathermap.org/data/2.5/weather?",
//       Geo={},//push geolocation into Geo={}
//       WeatherUrl = "api.openweathermap.org/data/2.5/weather?"+"lat="+Geo.lat+'&lon='+Geo.lng+key;

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success,error);
//   }
//   else {
//     alert('Geolocation is not supported');
//   }
//   function error() {
//     alert("That's weird! We couldn't find you!");
//   }
//   var location,
//       temp,
//       img,
//       icon,
//       minTemp,
//       maxTemp,
//       description,
//       wind,
//       humidity;
//   //----------------------------------------------------------------------------------------
//   function success(position) {
//     Geo.lat = position.coords.latitude;
//     Geo.lng = position.coords.longitude;
//     WeatherUrl = "https://api.openweathermap.org/data/2.5/weather?"+"lat="+Geo.lat+"&lon="+Geo.lng+"&units=Imperial"+ key;
//     hitApi();
//   }
//   var weather ={};//Push response into object
//   function hitApi() {
//     $.ajax({
//       url: WeatherUrl,
//       method: "GET",
//       dataType: "jsonp",
//     }).done((res, err) => {
//       weather.res = JSON.stringify(res);
//       location    = res.name;
//       temp        = res.main.temp;
//       img         = res.weather[0].icon;
//       minTemp     = res.main.temp_min;
//       maxTemp     = res.main.temp_max;
//       description = res.weather[0].description;
//       wind        = res.wind['speed'];
//       humidity    = res.main.humidity;
//       icon        = "http://openweathermap.org/img/w/" + img + ".png";
//       $('#temp').html(temp);
//       $('#desc').html(description);
//       $('#humid').html(humidity);
//       $('#imgdiv').attr('src',icon);
//       $('#location').html(location);
//       $('#wind').html(wind);
// 	  console.log(WeatherUrl);
//     }
// 	   ).fail((jqXHR, textStatus, errorThrown) => {
// 	     console.log(jqXHR.status);
// 	     console.log(textStatus);
// 	     console.log(errorThrown);
// 	   }
// 		 );
//     return;
//   }
//   //----------------------------------------------------------------------------------------
// });
*/
